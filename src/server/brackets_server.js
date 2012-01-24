var fs = require('fs');
var http = require('http');
var express = require('express');
var gzip = require('connect-gzip');
var socket_io = require('socket.io');
var everyauth = require('everyauth');
var mongodb = require('mongodb');
var mongoStore = require('connect-mongodb');

var db = new mongodb.Db('ghchat', new mongodb.Server("127.0.0.1", 27017, {}), {});

var config = null;

function init(conf) {
    config = conf;

    var redirect = createRedirectServer(config);
    redirect.listen(3000, "", function () { console.log("redirect server running on port 3000"); });
    
    console.log('creating app');
    var app = createAppServer(config);

    console.log('setting up routes');

    app.get('/', function(req, res) {
        res.render("index.ejs", {layout:false});
    });
    
    app.get('/throwerror', function(req, res) {
        throw "this sucks";
    });
    
    app.get('/ejs/:f', function(req, res) {
        res.render(req.params.f + ".ejs", {layout:false});
    });

    app.get('/test', function(req, res) {
        res.end('<h1>User!</h1><pre>' + JSON.stringify(req.user) + '</pre>');
    });
    
    console.log('starting app listening...')
    app.listen(3001, "", function () { console.log("gitchat server running on port 3001"); });
    console.log('...done starting listening')

    process.on('uncaughtException', function uncaughtExceptionHandler(err) {
        console.log("Caught exception at top level: " + err);
        console.trace();
    });

}

function readSSLCerts(config) {
    var result = { cert: fs.readFileSync(config.ssl.certFile)
                   , key:  fs.readFileSync(config.ssl.keyFile),
                 };
    if (config.ssl.caBundleFiles) {
        var ca = [];
        for (var i = 0; i < config.ssl.caBundleFiles.length; ++i) {
            ca.push(fs.readFileSync(config.ssl.caBundleFiles[i]));
        }
        result.ca = ca;
    }
    return result;
}

function createRedirectServer(config) {
    // This simple http server just redirects everything to https
    var server = http.createServer(function redirectServerHandler (req, res) {
	res.writeHead(301, {'Location': config.baseUrl + req.url});
	res.end();
    });
    return server;
}

function findOrCreateUserImpl(session, accessToken, accessTokenExtra, githubUserMetadata) {
    console.log('need to find or create user: ' + JSON.stringify(githubUserMetadata));

    var promise = this.Promise();
    db.collection('users', function openUserCollection(err, users) {
        if (err) {
            console.log('failed to open user collection');
            promise.fail(err);
        }
        else {
            console.log('going to find and modify record with ghid ' + githubUserMetadata.id);
            users.findAndModify( { ghid: githubUserMetadata.id }
                               , [[ 'ghid', 'ascending' ]]
                               , { $set: { ghid : githubUserMetadata.id
                                         , username: githubUserMetadata.login
                                         , accessToken: accessToken
                                         , lastLogin: new Date()
                                         }
                                 }
                               , { new: true, upsert: true , remove: false}
                               , function createUserCallback(err, data) {
                                     if (err) {
                                         console.log('promise failed: ' + JSON.stringify(err));
                                         promise.fail(err);
                                     }
                                     else {
                                         data.id = data.ghid;
                                         console.log('promise fulfilled: ' + JSON.stringify(data));
                                         promise.fulfill(data);
                                     }
                                 }
                               );
        }
    } );
    
    return promise;
}

function createAppServer(config) {
    everyauth.github
        .appId(config.github.id)
        .appSecret(config.github.secret)
        .scope(['user', 'repo'])
        .findOrCreateUser( findOrCreateUserImpl )
        .myHostname(config.baseUrl)
        .redirectPath('/');

    everyauth.everymodule.findUserById(
        function findUserByIdImpl (userId, callback) {
            console.log("trying to find user " + userId);
            db.collection('users', function openUserCollection(err, users) {
                if (err) {
                    callback(err, null)
                } else {
                    users.find( { ghid : userId } ).nextObject(
                        function findUserInDBCallback(err, doc) {
                            if (err) {
                                console.log('failed to find user ' + err);
                                callback(err, null);
                            }
                            else {
                                console.log("found " + JSON.stringify(doc));
                                callback(null, doc);
                            }
                        }
                    );
                }
            } );
        } );

    
    // 'app' is the real server. We serve everything over https
    var options = readSSLCerts(config);
    var app = express.createServer(options);

    app.configure( function configureExpress() {
        console.log('configuring express app...');
        app.set('views', __dirname + '/views');
        app.use(express.logger());
        app.use(express.bodyParser());
	app.use(express.cookieParser());
        app.use(express.session({ secret: config.cookieSecret
                                , store: new mongoStore({db: db, collection: "sessions"})
                                }));
        app.use(everyauth.middleware());
        app.use(app.router)

    });

    app.configure('development', function configureExpressDev() {
        console.log('... for development');
        app.use(express.static(__dirname + '/static'))
        app.use(express.directory(__dirname + '/static'));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

    });

    app.configure('production', function configureExpressProd() {
        console.log('... for production');
        app.use(gzip.staticGzip(__dirname + '/static'))
        app.use(express.errorHandler());
    });
    
    everyauth.helpExpress(app);
    
    var io = socket_io.listen(app);

    io.sockets.on('connection', function (socket) {
	socket.emit('news', { hello: 'world' });
	socket.on('my other event', function (data) {
	    console.log(data);
	});
        socket.on('throwerror', function(data) {
            throw "this socket sucks";
        });
    });

    app.io = io;
    return app;
}

exports.init = init;
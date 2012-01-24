var express = require('express');
var everyauth = require('everyauth');
var mongodb = require('mongodb');
var mongoStore = require('connect-mongodb');

var db = new mongodb.Db('brackets', new mongodb.Server("127.0.0.1", 27017, {}), {});

var config = null;

function init(conf) {
    config = conf;

    console.log('the static dir is: ' + config.staticDir);
    
    console.log('creating app');
    var app = createAppServer(config);

    console.log('setting up routes');
    configureRoutes(app);
    
    console.log('starting app listening...')
    app.listen(3000, "", function () { console.log("brackets server running on port 3000"); });
    console.log('...done starting listening')

    process.on('uncaughtException', function uncaughtExceptionHandler(err) {
        console.log("Caught exception at top level: " + err);
        console.trace();
    });

}

function createAppServer(config) {
    var app = express.createServer();

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
        app.use(express.static(config.staticDir))
        app.use(express.directory(config.staticDir));
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    return app;
}

function configureRoutes(app) {
    app.get('/throwerror', function(req, res) {
        throw "this sucks";
    });
}

exports.init = init;

var express = require('express');
var db = require('./db');
var mongoStore = require('connect-mongodb');
var dropbox = require('./dropbox');
var config = require('./config');

function init() {
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
                                , store: new mongoStore({db: db.db, collection: "sessions"})
                                }));
        app.use(app.router)
        app.use(express.static(config.staticDir))
        app.use(express.directory(config.staticDir));
	app.use(express.favicon());
        app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
    });

    return app;
}

function configureRoutes(app) {
    app.get('/throwerror', function(req, res) {
        throw "this sucks";
    });

    app.get('/auth/login', function(req, res) {
        dropbox.login(req, res);
    });

    app.get('/auth/logout', function(req, res) {
        dropbox.logout(req, res);
    });

    app.get('/auth/callback', function(req, res) {
	dropbox.callback(req, res);
    });

    app.get('/test', function(req, res) {
	dropbox.test(req, res);
    });

}

// start the whole thing up
// we wait until the next tick to give the debugger time to get going
process.nextTick(init);


var util = require('util');
var qs = require('querystring');
var dbox = require('dbox');
var config = require('./config');
var client = dbox.createClient({ app_key: config.dropbox.key,
			         app_secret: config.dropbox.secret,
			         root: "sandbox" }); // TODO: change this once we get full account access


function getApiCallOpts(req, res) {
    if (req.session.access_token !== undefined && req.session.access_token_secret !== undefined) {
	return {oauth_token: req.session.access_token,
		oauth_token_secret: req.session.access_token_secret};
    } else {
	console.log('user not logged in, redirecting...');
	return false;
    }
}

function respondNotLoggedIn(req, res) {
    req.session.destroy();
    res.statusCode = 401;
    res.end('Not logged in to Dropbox');
}

function login(req, res) {
    console.log('in login')
    client.request_token(function(status, reply) {
	if (status === 200) {
	    console.log('got a request token');
	    req.session.request_token = reply.oauth_token;
	    req.session.request_token_secret = reply.oauth_token_secret;
	    
	    var authUrl = "https://www.dropbox.com/1/oauth/authorize?" +
		qs.stringify({oauth_token : req.session.request_token,
			      oauth_callback : config.baseUrl + "/auth/callback" });

	    console.log('redirecting to ' + authUrl);
	    res.redirect(authUrl);
	}
	else {
	    throw("couldn't get request token from dropbox");
	}
    });
}

function logout(req, res) {
    console.log('in logout');
    req.session.destroy();
    res.redirect('/');
}

function callback(req, res) {
    console.log('in callback');
    var options = {oauth_token: req.session.request_token,
		   oauth_token_secret: req.session.request_token_secret};
    client.access_token(options, function(status, reply) {
	if (status === 200) {
	    console.log('got an access token');
	    req.session.access_token = reply.oauth_token;
	    req.session.access_token_secret = reply.oauth_token_secret;
	    res.redirect('/');
	} else {
	    throw("couldn't get access token from dropbox");
	}
    });
}

function configureFileSystemRoutes(app) {

    app.get('/fs/readdir', function readdir(req, res) {
	console.log('in readdir');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.query.p;

	client.metadata(path, options, function(status, reply) {
	    if (status === 200) {
		var m = JSON.parse(reply);
		if (!m.is_dir) {
		    res.statusCode = 404; // TODO: Change to a "is not a directory" specific error
		    res.end();
		}
		else {
		    var result = [];
		    if (m.contents !== undefined && m.contents.length !== undefined) {
			for (var i = 0; i < m.contents.length; i++) {
			    var fullpath = m.contents[i].path
			    result.push(fullpath.substr(fullpath.lastIndexOf("/")+1));
			}
		    }
		    res.end(JSON.stringify(result));
		}
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});
    });

    app.get('/fs/stat', function stat(req, res) {
	console.log('in stat');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.query.p;

	client.metadata(path, options, function(status, reply) {
	    if (status === 200) {
		var m = JSON.parse(reply);
		var result = {is_dir: m.is_dir};
		res.end(JSON.stringify(result));
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});
    });

    app.get('/fs/readfile', function readfile(req, res) {
	// TODO: We should get metadata first to make sure this is a reasonably sized file
	console.log('in readfile');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.query.p;

	client.get(path, options, function(status, reply) {
	    if (status === 200) {
		res.end(reply);
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});
    });

    app.post('/fs/writefile', function writefile(req, res) {
	// TODO: We should get metadata first to make sure this is a reasonably sized file
	console.log('in writefile');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.body.p;
	var data = req.body.d;
	console.log("here's the path: " + path);
	console.log("here's the data:\n" + data);

	client.put(path, data, options, function(status, reply) {
	    if (status === 200) {
		res.end(JSON.stringify(reply));
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});
    });

}

function configureServingRoutes(app) {
    app.get('/serve/*', function readfile(req, res) {
	console.log('in serve');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.path;
	path = path.substr("/serve".length);
	console.log("serving " + path);

	client.metadata(path, options, function(status, reply) {
	    if (status === 200) {
		var m = JSON.parse(reply);
		if (m.is_dir === false) {
		    if (m.mime_type !== undefined) {
			res.header("Content-Type", m.mime_type);
		    }

		    if (m.bytes !== undefined) {
			res.header("Content-Length", m.bytes);
		    }

		    client.get(path, options, function(status, reply) {
			if (status === 200) {
			    res.end(reply);
			}
			else if (status === 401) { // token expired
			    respondNotLoggedIn(req, res);
			}
			else {
			    res.statusCode = status;
			    res.end(reply);
			}
		    });
		}
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});


    });


    app.get('/metadata/*', function readfile(req, res) {
	console.log('in metadata');
	var options = getApiCallOpts(req, res);
	if (!options) {
	    respondNotLoggedIn(req, res);
	}
	var path = req.path;
	path = path.substr("/metadata".length);
	console.log("metadata-ing " + path);

	client.metadata(path, options, function(status, reply) {
	    if (status === 200) {
		res.header("Content-Type", "text/plain");
		res.end(util.inspect(JSON.parse(reply), false, 10, false));
	    }
	    else if (status === 401) { // token expired
		respondNotLoggedIn(req, res);
	    }
	    else {
		res.statusCode = status;
		res.end(reply);
	    }
	});


    });

}

exports.login = login;
exports.logout = logout;
exports.callback = callback;
exports.configureFileSystemRoutes = configureFileSystemRoutes;
exports.configureServingRoutes = configureServingRoutes;
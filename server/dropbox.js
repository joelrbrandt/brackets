var qs = require('querystring');
var dbox = require('dbox');
var config = require('./config');
var client = dbox.createClient({ app_key: config.dropbox.key,
			         app_secret: config.dropbox.secret,
			         root: "sandbox" }); // TODO: change this once we get full account access


function options_or_login(req, res) {
    if (req.session.access_token !== undefined && req.session.access_token_secret !== undefined) {
	return {oauth_token: req.session.access_token,
		oauth_token_secret: req.session.access_token_secret};
    } else {
	console.log('user not logged in, redirecting...');
	res.redirect('/auth/login');
	return null;
    }
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
	    res.redirect('/test'); // TODO: change this to redirect to root
	} else {
	    throw("couldn't get access token from dropbox");
	}
    });
}

function test(req, res) {
    console.log('in test');
    var options = options_or_login(req, res);
    if (!options) {
	return;
    }
    client.metadata('/', options, function(status, reply) {
	if (status === 200) {
	    res.end(reply);
	}
	else if (status === 401) { // token expired
	    req.session.destroy();
	    res.redirect('/auth/login');
	}
	else {
	    throw("couldn't access dropbox -- status: " + status + " reply: " + JSON.stringify(reply));
	}
    });
}

exports.login = login;
exports.logout = logout;
exports.callback = callback;
exports.test = test;

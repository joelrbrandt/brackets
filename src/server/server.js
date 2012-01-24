var config = require("./config")
var gitchat = require('./brackets_server');
process.nextTick(function() { gitchat.init(config) });


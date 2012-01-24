var config = require("./config")
var brackets = require('./lib/brackets_server');
process.nextTick(function() { brackets.init(config) });


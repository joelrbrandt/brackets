var mongodb = require('mongodb');

var db = new mongodb.Db('brackets', new mongodb.Server("127.0.0.1", 27017, {}), {});

exports.db = db;
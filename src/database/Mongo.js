var mongo = require('mongodb').MongoClient

var DATABASE = 'application';
var MONGODB_URI = 'mongodb://db:27017';

module.exports = function getDatabase(callback) {
  var dbOptions = {
    useNewUrlParser: true,
  };
  mongo.connect(MONGODB_URI, dbOptions, function(err, client) {
    if (err) return callback(err);
    
    var db = client.db(DATABASE);
    callback(null, db);
  });
};
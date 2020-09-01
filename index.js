import express from 'express';
import getDatabase from './src/database/Mongo';
var PORT =  3000;
var HOST = '0.0.0.0';

var app = express();

app.use('/', function(req, res) {

  getDatabase(function(dbErr, db) {
    if (dbErr) return res.json({error: dbErr});

    var collection = db.collection('accounts');

    collection.insertOne({name: 'Alan Gonçalves'}, (insertErr, result) => {
     if (insertErr) return res.json({error: insertErr});
     
     return res.json({data: result.ops[0]});
    });
  });
});

app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});
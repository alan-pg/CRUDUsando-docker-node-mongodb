var express = require('express');

var PORT =  3000;

var app = express();

app.use('/', function(req, res) {
  res.send('Docker node mongodbbbbbbb');
});

app.listen(PORT, function() {
  console.log('Running on port ' + PORT);
});
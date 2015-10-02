var express = require('express');

var server = express();

server.get('/', function(req, res) {
  return res.status(200).send('Hello World');
});

server.listen(3000, function(err) {  //this catches errors
  if (err) {
    console.log('There was an error');
  } else {
    console.log('The server is listening on 3000');
  }
});

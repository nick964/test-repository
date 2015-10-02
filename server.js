var express = require('express');
var path = require('path');

var server = express();
server.use(express.static(path.join(__dirname, 'public')));

server.listen(3000, function(err) {  //this catches errors
  if (err) {
    console.log('There was an error');
  } else {
    console.log('The server is listening on 3000');
  }
});

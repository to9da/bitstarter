var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var buf = new Buffer(64);
buf = fs.readFileSync('index.html');

app.get('/', function(request, response) {
  //response.send('Hello World 2!')
  response.send(buf.toString());
});

app.get('/pics/pic1.jpg', function(request, response) {
  var img = fs.readFileSync('./pics/pic1.jpg');
  response.writeHead(200, {'Content-Type': 'image/jpg' });
  response.end(img, 'binary');
});

app.get('/pics/pic2.jpg', function(request, response) {
    var img = fs.readFileSync('./pics/pic2.jpg');
      response.writeHead(200, {'Content-Type': 'image/jpg' });
        response.end(img, 'binary');
});

app.get('/pics/pic3.jpg', function(request, response) {
    var img = fs.readFileSync('./pics/pic3.jpg');
      response.writeHead(200, {'Content-Type': 'image/jpg' });
        response.end(img, 'binary');
});


var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});

// need to do "npm install upper-case" in command console
console.log("need to do -- npm install upper-case --- in command console ");
var http = require('http');
var uc = require('upper-case');
console.log("this server is runnning on http://localhost:8080 ");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc.upperCase("Hello World!"));
  res.end();
}).listen(8080);

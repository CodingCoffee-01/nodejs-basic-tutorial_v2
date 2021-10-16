var http = require('http');
var fs = require('fs');
console.log("this server is runnning on http:localhost:8080 ");
http.createServer(function (req, res) {
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

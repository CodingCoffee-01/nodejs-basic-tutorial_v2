var http = require('http');
var url = require('url');
console.log("this server is runnning on http://localhost:4000 ");
console.log("Please input : http://localhost:4000/?year=2017&month=July ");
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " hello  " + q.month;
  res.end(txt);
}).listen(4000);

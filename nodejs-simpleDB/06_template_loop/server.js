// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
port(8081);
console.log(" simpleDB server running , type http://localhost:8081");

var mydata = {
  people: [
    {
      "name": "Brad",
      "city": "London"
    },
    {
      "name": "Jill",
      "city": "Tokyo"
    },
    {
      "name": "Kate",
      "city": "New York"
    }
  ]
};
route('/', showPage);

function showPage(request) {
  request.render("mytemplate.html",mydata);
}

start();

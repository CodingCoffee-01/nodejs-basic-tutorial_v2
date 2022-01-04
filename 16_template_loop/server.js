// adapted from https://github.com/robynitp/networkedmedia


// every servi application must have these 2 lines
var servi = require("servi");
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
console.log("this server is runnning on http://localhost:3001 ");

port(3001);

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

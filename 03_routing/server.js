// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
console.log("this server is runnning on http://localhost:3001 ");


port(3001);

// tell the server to response with "Hello World"
function run(request) {
  request.respond("Hello World ");
}

// tell the server to run the "run" function on main url request
route('/',run);


// start the server
start();

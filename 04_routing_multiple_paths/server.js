// every servi application must have these 2 lines
var servi = require('servi');
var app = new servi(true);

// set the port (defaults to 3000 if you leave out this line)
console.log("this server is runnning on http://localhost:3001 ");
console.log("this server is runnning on http://localhost:3001/one ");
console.log("this server is runnning on http://localhost:3001/two ");
console.log("this server is runnning on http://localhost:3001/buckle/my/shoe ");

port(3001);

// set up routes
route('/', run);
route('/one',handleOne);
route('/two',handleTwo);
route('/buckle/my/shoe',buckleMyShoe);

// define route handler functions
function run(request) {
  console.log("hellow world");
  request.respond("hello world");
}

function handleOne(request) {
  console.log("one");
  request.respond("thanks one");
}

function handleTwo(request) {
  console.log("two");
  request.respond("thanks two");
}

function buckleMyShoe(request) {
  console.log("buckle my shoe");
  request.respond("buckle my shoe");
}


// start the server
start();

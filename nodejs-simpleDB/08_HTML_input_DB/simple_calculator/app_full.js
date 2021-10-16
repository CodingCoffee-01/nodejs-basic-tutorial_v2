const express = require("express");
const bodyParser = require("body-parser")

// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index_full.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2 ;

  res.send("Addition = " + result);
});

app.post("/add", function(req, res) {
  console.log(" Post /add ");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2 ;

  res.send("Addition = " + result);
});

app.post("/sub", function(req, res) {
  console.log(" Post /sub ");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 - num2 ;

  res.send("sub = " + result);
});

app.post("/mul", function(req, res) {
  console.log(" Post /mul ");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 * num2 ;

  res.send("mul = " + result);
});

app.post("/div", function(req, res) {
  console.log(" Post /div ");
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 / num2 ;

  res.send("Addition = " + result);
});

app.listen(8081, function(){
  console.log("server is running on port http://localhost:8081");
})

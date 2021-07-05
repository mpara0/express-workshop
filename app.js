// import express module
var express = require("express");
// initializes Express app
var app = express();

const bodyParser = require('body-parser'); 
app.use(bodyParser.json()); 

// runs express server by running 'node app.js' on terminal
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
 });
 
  // homepage GET request
  app.get("/", (req, res) => {
     res.send("Hello, Express!"); 
  });
  
  // initialize array of things that make you happy
  // @TODO: reformat in JSON
  var happyArr = ["turtles", "dogs", "peppa pig"];

  // GET request for values that make you happy 
  app.get('/happiness', function (req, res) {
    // @TODO: include GET request
  });

  // POST request - can edit on Postman
  app.post('/happiness', function(req, res) {
     // @TODO: include POST request
  });

  app.put('/happiness', function(req, res) {
    // @TODO: include PUT request
  });

app.delete('/happiness', function(req, res) {
  // @TODO: include DELETE request
});

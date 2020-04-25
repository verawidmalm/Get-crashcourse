var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');


var port=5000;
//app.set('port',(process.env.PORT || port));

// Serve static assets from public/
//app.use(express.static(path.join(__dirname, 'public/')));

var server = http.listen(port, function () {
  console.log('Server listening on port ' + port);
});


app.use("/static", express.static('./static/'));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});


//app.get("/",(req,res)=> res.sendFile(path.join(__dirname+ "/index.html")));

//
//
// app.get("/",(req,res)=> res.send("GET recieved"));
//
//
//
// app.post("/",(req,res)=> res.send("POST recieved"));

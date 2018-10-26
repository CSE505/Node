var express = require('express');
var app = express();
var fs = require('fs');

app.Use(express.static(__dirname + '/../..node_integration'));

//creat rest Api
app.get('/products', function (req, res) {
  fs.readFile('../sample.json', function (err, data) {
    res.send(result);
  });
});

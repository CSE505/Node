var express = require('express');
var fs = require('fs');
var app = express();

app.Use(express.static(__dirname + '/../..Node_fsEx'));

//creat rest Api
app.get('/products', function (req, res) {
  fs.readFile('../static/sample.json', function (err, data) {
    res.send(result);
  });
});

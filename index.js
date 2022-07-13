var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(morgan('dev'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



module.exports = app;
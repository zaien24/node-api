var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var user = require('./api/user/index.js'); // or ./api/user


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(morgan('dev'));
app.use('/users', user);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



module.exports = app;
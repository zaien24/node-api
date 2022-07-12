const express = require('express');
const morgan = require('morgan');
const app = express();


function logger(req, res, next) {
    console.log('i am logger');
    next();
}

function logger2(req, res, next) {
    console.log('i am logger2');
    next();
}

//MIDDELEWARE ADD
app.use(logger);
app.use(logger2);
app.use(morgan('div'));


app.listen(3000, function() {
    console.log('SERVER IS RUNNING ')
})


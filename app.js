var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var History = require('./models/History');

var app = express();


app.set('port', (process.env.PORT || 1234));

mongoose.connect("mongodb://localhost/imagesearch");

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/history', require('./routes/history'));



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});



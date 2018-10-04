var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var sendmail = require('./sendmail');

var app = express();

//Sending email here

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
//app.use(express.static(path.join(__dirname, 'public')));

//app.get('/api', (req, res) => res.send('Hello World!'))
//app.use('/api', routes);
app.use('/api', sendmail);

// catch 404 and forward to error handler
//app.use(function(req, res, next) {
//  var err = new Error('Not Found');
//  err.status = 404;
//  next(err);
//});

//if (app.get('env') === 'development') {
//  app.use(function(err, req, res, next) {
//    res.status(err.status || 500);
//    res.render('error', {
//      message: err.message,
//      error: err
//    });
//  });
//}

// production error handler
// no stacktraces leaked to user
//app.use(function(err, req, res, next) {
//  res.status(err.status || 500);
//  res.render('error', {
//    message: err.message,
//    error: {}
//  });
//});

app.listen(3000, () => console.log('Example app listening on port 3000!'))
//module.exports = app;

var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors')
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog_tdd');
var index = require('./routes/index');
var users = require('./routes/users');
var article = require('./routes/article')


app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', index);
app.use('/users', users);
app.use('/article', article)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

module.exports = app;

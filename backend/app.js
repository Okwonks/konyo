const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const loadRoutes = require('./config/route-loader');

const usersRouter = require('./routes/users');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../frontend/build')));

// TODO add a "machine" here which will load all the routes
loadRoutes(app);
app.use('/api/users', usersRouter);

// load react app
/* eslint-disable-next-line no-unused-vars */
app.get('/*', (req, res, next) => res.sendFile(path.join(__dirname, '../frontend/build', 'index.html')));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Not found'));
});

// error handler
app.use(function(err, req, res, next) { // eslint-disable-line no-unused-vars
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get('*', (req, res) => res.status(404));

module.exports = app;

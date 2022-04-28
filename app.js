require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (_req, res) =>
  res.sendFile(path.resolve(__dirname, "build", "index.html"))
);
app.get("/health", (_req, res) => res.send(200));
app.get("/gg-logout", (_req, res) => res.redirect(307,'https://accounts.google.com/Logout?hl=vi&timeStmp=1641118512&secTok=.AG5fkS-Ve9gUe2ABTFEEq8k0Jdam9H9Jsg&ec=GAdAAQ'));
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;

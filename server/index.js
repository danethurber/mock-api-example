var express = require('express');
var app = express();
var api = require('./api');

app.use('/v1', api);

app.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  next();
});

module.exports = app;

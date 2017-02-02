'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// rotas
var album_routes = require('./routes/album');
var image_routes = require('./routes/image');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// headers
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-API-KEY, ORIGIN, X-Request-With, Content-Type, Accept, Access-Control-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Allow', 'GET, POST, PUT, DELETE');

  next();
});

// rutas base
app.use('/api', album_routes);
app.use('/api', image_routes);

module.exports = app;
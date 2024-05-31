// var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var pojazdyRouter = require('./routes/Pojazdy');
var wyposazenieRouter = require('./routes/Wyposazenie');
var przegladyRouter = require('./routes/Przeglady');
var naprawyRouter = require('./routes/Naprawy');
var dyspozycjeRouter = require('./routes/Dyspozycje');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/pojazdy', pojazdyRouter);
app.use('/wyposazenie', wyposazenieRouter);
app.use('/przeglady', przegladyRouter);
app.use('/naprawy', naprawyRouter);
app.use('/dyspozycje', dyspozycjeRouter);

module.exports = app;

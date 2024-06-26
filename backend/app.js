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

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token')
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

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

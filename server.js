'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    session = require('express-session');
  
var functions = require('./app/common/functions.server.js');

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
app.use('/js', express.static(process.cwd() + '/app/js'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));

app.use(session({
    secret: 'secretClementine',
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'jade');
app.set('views', './app/views');

//////////////////////////
if (process.env.NODE_ENV === 'development'){
    //Gulp build execution
    functions.execute('gulp build');
}
/////////////////////////

routes(app, passport);

var port = 8080;
app.listen(process.env.PORT || port, function () {
    console.log('Node.js listening on port ' + port + '...');
});
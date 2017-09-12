'use strict';

var express = require('express'),
    routes = require('./app/routes/index.js'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    passportTwitter = require('passport'),
    session = require('express-session'),
    compression = require('compression');

var winston = require('winston');
require('winston-daily-rotate-file');
  
var functions = require('./app/common/functions.server.js');

var app = express();
require('dotenv').load();
require('./app/config/passport')(passport);
require('./app/config/passport-twitter')(passportTwitter);
//require('./app/config/passport-local')(passportLocal);

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
    /////////////////////////////////////////////
    //CHECK FOLDER LOG AND CREATE IT////////////////////////////////////
    functions.ensureExists(__dirname + '/log', '0744', function(err) {
        if (err) console.error(err);
        else console.log('Folder Log was created or existed');
    });
    //////////////////////////////////////////////////

    //LOGGER//////////////////////////////////////////
    var logger = new (winston.Logger)({
        transports: [
        functions.transport
        ]
    });
    functions.logIt(logger,'//////////////////STARTING LOGGER INFO////////////////////////');
/////////////////////////////////////////////////
}
/////////////////////////

//Forzing Cache of static/////////////////////////
app.use(functions.cacheIt);
/////////////////////////////////////////////////

//COMPRESSION////////////////////////////////////
app.use(compression({filter: functions.shouldCompress}));
/////////////////////////////////////////////////

routes(app, passport, passportTwitter);

var port = 8080;
app.listen(process.env.PORT || port, function () {
    console.log('Node.js listening on port ' + port + '...');
});
'use strict';

var path = process.cwd();

var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var DataHandler = require(path + '/app/controllers/dataHandler.server.js');
var UserHandler = require(path + '/app/controllers/userHandler.server.js');

module.exports = function (app, passport, passportTwitter, passportLocal, emailServer) {
    
  var clickHandler = new ClickHandler();
  var dataHandler = new DataHandler();
  var userHandler = new UserHandler(emailServer);

    app.route('/')
        .get(function (req, res) {
            res.sendFile(path + '/public/index.html');
    });
        
    app.route('/logout')
        .get(function (req, res) {
            req.logout();
            res.redirect('/');
        });
    
    app.route('/api/:id')
        .get(function (req, res) {
            if (req.user) {
                res.json(req.user.github);
            } else {
                res.send('no user');
            }
        });
        
    app.route('/auth/github/callback')
        .get(passport.authenticate('github', {
        successRedirect: '/',
        failureRedirect: '/login'
        }));
        
    app.route('/auth/twitter')
        .get(passportTwitter.authenticate('twitter'));
    
    app.route('/auth/twitter/callback')
        .get(passportTwitter.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/login'
        }));
    
    app.route('/api/:id/clicks')
        .get(clickHandler.getClicks)
        .post(clickHandler.addClick)
        .delete(clickHandler.resetClicks);
        
    app.route('/api/:id/info')
		.get(dataHandler.getDatas);
		
	app.route('/api/:id/infoadd')
		.post(dataHandler.addData);
		
	app.route('/api/:id/infodel')
        .delete(dataHandler.deleteData);
        
    /////////////////////////////////////////////////////////////////
    /*app.route('/authlocal')
		.get(function (req, res) {
			res.sendFile(path + '/public/loginlocal.html');
		});*/
		
	app.route('/auth/local') 
		.get(passportLocal.authenticate('local', { 
			failureRedirect: '/authlocal' }),
		function(req, res) {
    		res.redirect('/');
		})
		.post(passportLocal.authenticate('local', { 
			failureRedirect: '/authlocal' }),
		function(req, res) {
    		res.redirect('/');
		});
		
	app.route('/auth/localnew')
		.post(userHandler.addUser);
		
	app.route('/auth/localnewreset')
		.post(userHandler.resetPass);
		
	app.route('/auth/localnewmessage')
		.get(userHandler.message);
	
	app.route('/auth/localnewok')
		.get(function (req, res) {
			res.sendFile(path + '/public/usercreationOK.html');
		});
/////////////////////////////////////////////////////////////////

};
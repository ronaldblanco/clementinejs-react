'use strict';

var path = process.cwd();

var ClickHandler = require(path + '/app/controllers/clickHandler.server.js');
var DataHandler = require(path + '/app/controllers/dataHandler.server.js');

module.exports = function (app, passport) {
    
    var clickHandler = new ClickHandler();
    var dataHandler = new DataHandler();

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

};
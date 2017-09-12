'use strict';

var TwitterStrategy = require('passport-twitter').Strategy;
var User = require('../models/users');
var configAuth = require('./auth.js');

module.exports = function (passportTwitter) {
    passportTwitter.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passportTwitter.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
    
    passportTwitter.use(new TwitterStrategy({
        consumerKey: configAuth.twitterAuth.clientID,
        consumerSecret: configAuth.twitterAuth.clientSecret,
        callbackURL: configAuth.twitterAuth.callbackURL
    },
    function (token, refreshToken, profile, done) {
        process.nextTick(function () {
            User.findOne({ 'github.id': profile.id }, function (err, user) {
                if (err) {
                    return done(err);
                }

                if (user) {
                    return done(null, user);
                } else {
                    var newUser = new User();

                    newUser.github.id = profile.id;
                    newUser.github.username = profile.username;
                    newUser.github.displayName = profile.displayName;
                    //newUser.github.publicRepos = profile._json.public_repos;
                    newUser.nbrClicks.clicks = 0;
                    //newUser.login.photo = profile.photos[0].value;

                    newUser.save(function (err) {
                        if (err) {
                            throw err;
                        }

                        return done(null, newUser);
                    });
                }
            });
        });
    }));
};
var passport = require('passport');
var GithubStrategy = require('passport-github').Strategy;

exports.setup = function (User, config) {
  passport.use(new GithubStrategy({
      clientID: config.github.clientID,
      clientSecret: config.github.clientSecret,
      callbackURL: config.github.callbackURL
    },
    function(accessToken, refreshToken, profile, done) {
      User.findOne({
        'github.id': profile.id
      },
      function(err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          user = new User({
            name: profile.displayName,
            email: profile.email,
            picture: profile.avatar_url,
            role: 'user',
            tokens: [],
            username: profile.login,
            provider: 'github',
            github: profile._json
          });
          user.tokens.push({kind: 'github', token: accessToken });
          user.save(function(err) {
            if (err) done(err);
            return done(err, user);
          });
        } else {
          return done(err, user);
        }
      })
    }
  ));
};

const User = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;

const strategy = new LocalStrategy(
  {
    username: 'username'
  },
  function(username, password, done) {
    User.findOne({username: username}, (err, user) => {
      console.log('this is the localStrategy user:', user);
      if (err) {
        console.log('localStrategy error==============', err);
        return done(err);
      }
      if (!user) {
        console.log('localStrategy user1==============', username);
        return done(null, false, {message: 'Incorrect username' });
      }
      if (!user.checkPassword(password)) {
        console.log('localStrategy user2==============', user);
        return done(null, false, { message: 'Incorrect password'});
      }
      return done(null, user);
    })
  }
);

module.exports = strategy;
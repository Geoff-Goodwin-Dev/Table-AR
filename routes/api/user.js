const express = require('express');
const router = express.Router();
const User = require('../../models/user');
const passport = require('../../passport');

router.post(
  '/',
  (req, res, next) => {
    console.log('user signup');

    const { username, password } = req.body;
    console.log(username, password, typeof(username), typeof(password));
    // ADD VALIDATION
    User.findOne({ username: username }, (err, user) => {
      if (err) {
        console.log('Error finding user in DB...', err)
      } else if (user) {
        res.json({
          error: `Sorry, already a user with the username: ${username}`
        })
      }
      else {
        const newUser = new User({
          username: username,
          password: password
        });
        newUser.save((err, savedUser) => {
          if (err) return res.json(err);
          console.log('this is the saved user:', savedUser);
          // res.json(savedUser)
          next();
        });
      }
    });
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    let userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

router.post(
  '/login',
  function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body);
    next()
  },
  passport.authenticate('local'),
  (req, res) => {
    console.log('logged in', req.user);
    let userInfo = {
      username: req.user.username
    };
    res.send(userInfo);
  }
);

router.get('/', (req, res, next) => {
  console.log('===== user!!======');
  console.log(req.user);
  if (req.user) {
    res.json({ user: req.user })
  } else {
    res.json({ user: null })
  }
});

router.post('/logout', (req, res) => {
  if (req.user) {
    req.logout();
    res.send({ msg: 'logging out' })
  } else {
    res.send({ msg: 'no user to log out' })
  }
});

module.exports = router;
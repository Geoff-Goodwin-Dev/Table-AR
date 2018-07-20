const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const session = require("express-session");
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

// Sessions
app.use(
  session({
    secret: "code-dictator",
    resave: false, // required
    saveUninitialized: false // required
  })
);

app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

// For testing sessions
// app.post('/api/users', (req, res) => {
//   console.log('user signup');
//   req.session.username = req.body.username;
//   res.end()
// });

// Passport
app.use(passport.initialize());
app.use(passport.session());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tablear";
// Add routes, both API & view


// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
mongoose.set('bufferCommands', false);
mongoose.Promise = Promise;

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`));
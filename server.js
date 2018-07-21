const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
// const routes = require("./routes");
const session = require("express-session");
const dbConnection = require('./database');
const passport = require("./passport");
const app = express();
const PORT = process.env.PORT || 3001;
const morgan = require("morgan");
const user = require('./routes/api/user');
const MongoStore = require('connect-mongo')(session);

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tablear";
// // Connect to the Mongo DB
// mongoose.connect(MONGODB_URI);
// mongoose.set('bufferCommands', false);
// mongoose.Promise = Promise;

// Sessions
app.use(
  session({
    secret: "code-dictator",
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false, // required
    saveUninitialized: false // required
  })
);

// For testing sessions
app.use( (req, res, next) => {
  console.log('req.session', req.session);
  return next();
});

// app.post('/api/users', (req, res) => {
//   console.log('user signup');
//   req.session.username = req.body.username;
//   res.end()
// });

// Passport
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', user);
// app.use(routes);


app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`));
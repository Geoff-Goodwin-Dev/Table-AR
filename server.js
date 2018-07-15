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

// middleware
app.use(bodyParser.urlencoded({ useNewUrlParser: true, extended: true }));
app.use(bodyParser.json());

// Add routes, both API & view
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

// Passport
app.use(passport.initialize());
app.use(passport.session());



const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tablear";

// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`));
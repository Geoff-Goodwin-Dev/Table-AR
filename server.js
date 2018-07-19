const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tablear";
// Add routes, both API & view


// Connect to the Mongo DB
mongoose.connect(MONGODB_URI);
mongoose.set('bufferCommands', false);
mongoose.Promise = Promise;

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`));
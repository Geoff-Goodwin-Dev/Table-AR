const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}



const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tablear";
mongoose.connect(MONGODB_URI);
// Add routes, both API & view
app.use(routes);


// Connect to the Mongo DB
mongoose.Promise = Promise;

app.listen(PORT, () => console.log(`🌎  ==> API Server now listening on http://localhost:${PORT} !`));
const express = require('express')
const app = express()
const path = require("path");
const port = 3015
const router = require('./routes/router')
const bodyParser = require('body-parser');

const expressSession = require("express-session");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");

require("dotenv").config();

// Expres session setup
const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

// Express app is using a routes defined in the 'router.js' file.
app.use('/', router);

// Express app is listening on specified PORT.
app.listen(port, () => {console.log(`Example app listening at http://localhost:${port} 🚀`)})
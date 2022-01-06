const express = require('express')
const app = express()
const port = 3015
const router = require('./routes/router')
const expressSession = require("express-session");

const passport = require("passport");
const strategy = require('./passport/passport');

require("dotenv").config();

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

app.use(expressSession(session));
app.use('/', router);

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port} 🚀`)})

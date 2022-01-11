const express = require('express')
const app = express()
const port = 3015
const router = require('./routes/router')
const expressSession = require("express-session");
const Auth0Strategy = require("passport-auth0");
const cors = require("cors");

const passport = require("passport");

require("dotenv").config();

const session = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: false
};

app.use(expressSession(session));

app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(express.urlencoded({extended: true,}));
app.use(express.json());

const strategy = new Auth0Strategy(
    {
      domain: process.env.AUTH0_DOMAIN,
      clientID: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      callbackURL: process.env.AUTH0_CALLBACK_URL
    },
    function(accessToken, refreshToken, extraParams, profile, done) {
      return done(null, profile);
    }
);

passport.serializeUser((user, done) => {
    done(null, user);
});
  
passport.deserializeUser((user, done) => {
    done(null, user);
});

passport.use(strategy);
app.use(passport.initialize());
app.use(passport.session());

// app.use((req, res, next) => {
//   res.locals.isAuthenticated = req.isAuthenticated();
//   next();
// });

app.use('/', router);

app.listen(port, () => {console.log(`Example app listening at http://localhost:${port} 🚀`)})

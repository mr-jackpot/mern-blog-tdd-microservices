const passport = require("passport")

const serverStatus = (req, res) => {
  res.send({status: 1})
}

const authenticateUser = (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      console.log("line 10 FIRED!!! User authenticated.")
      return next(err)
    }
    if (!user) {
      console.log("line 14 FIRED!!! User authenticated.")
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) {
          return next(err)
      }
      console.log("line 19 FIRED!!! User authenticated.")
      const returnTo = req.session.returnTo
      delete req.session.returnTo
      res.redirect(returnTo || '/')
    })
    
})(req, res, next)
}

const logOutUser = (req, res) => {
  req.logOut();

  let returnTo = req.protocol + "://" + req.hostname;
  const port = req.connection.localPort;

  if (port !== undefined && port !== 80 && port !== 443) {
    returnTo =
      process.env.NODE_ENV === "production"
        ? `${returnTo}/`
        : `${returnTo}:${port}/`;
  }

  const logoutURL = new URL(
    `https://${process.env.AUTH0_DOMAIN}/v2/logout`
  );

  const searchString = querystring.stringify({
    client_id: process.env.AUTH0_CLIENT_ID,
    returnTo: returnTo
  });

  logoutURL.search = searchString;

  res.redirect(logoutURL);
}

module.exports = {serverStatus, authenticateUser, logOutUser}
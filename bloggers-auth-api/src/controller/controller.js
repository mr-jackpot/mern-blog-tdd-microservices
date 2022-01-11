const passport = require("passport")

const serverStatus = (req, res) => {
  res.send({status: 1})
}

const authenticateUser = (req, res, next) => {
  passport.authenticate("auth0", (err, user, info) => {
    if (err) {
      return next(err)
    }
    if (!user) {
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) {
          return next(err)
      }
      // const returnTo = req.session.returnTo <-- this is FUBAR. returnTo undefined
      returnTo = 'http://localhost:3000/'
      delete req.session.returnTo
      console.log(`User successfully authenticated.`)
      res.redirect(returnTo || '/')
    })
}) (req, res, next)  
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

  // res.redirect(logoutURL);
  res.redirect('http://localhost:3000/');
  
}

const secured = (req, res, next) => {
  if (req.user) {
    res.send({secured: 1})
    return next();
  }
  res.send({secured: 0});
};

module.exports = {serverStatus, authenticateUser, logOutUser, secured}
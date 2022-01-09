const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();
const passport = require("passport")

router.get('/', controller.serverStatus)

router.get('/login', passport.authenticate("auth0"), (req, res) => {res.redirect("/")})

router.get('/callback', controller.authenticateUser)

router.get('/logout', controller.logOutUser)

module.exports = router;
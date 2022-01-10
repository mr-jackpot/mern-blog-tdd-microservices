const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();
const passport = require("passport")

router.get('/', controller.serverStatus)

router.get('/login', passport.authenticate("auth0", {scope: "openid email profile"}), (req, res) => {res.redirect("/")})

router.get('/callback', controller.authenticateUser)

router.get('/logout', controller.logOutUser)

router.get('/secure', controller.secured)

module.exports = router;
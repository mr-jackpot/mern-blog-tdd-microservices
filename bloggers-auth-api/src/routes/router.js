const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', controller.serverStatus)

module.exports = router;
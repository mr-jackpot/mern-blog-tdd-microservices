const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('');
})

router.get('/status', (req, res) => {
    res.send('Server is running!');
})

router.get('/db', controller.checkDBStatus)

module.exports = router;
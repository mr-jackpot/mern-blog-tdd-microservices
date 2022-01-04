const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({status:1});
})

router.get('/api/db', controller.checkDBStatus)

router.get('/api/users', controller.findAllUsers)

router.get('/api/users/:id', controller.findOneUser)

router.post('/api/users', controller.createOneUser)

module.exports = router;
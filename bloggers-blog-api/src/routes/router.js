const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({status:1});
})

router.get('/db', controller.checkDBStatus)

router.get('/findblogs', controller.findAllBlogs)

module.exports = router;
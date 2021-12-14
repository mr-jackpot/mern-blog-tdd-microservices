const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({status:1});
})

router.get('/db', controller.checkDBStatus)

router.get('/findblogs', controller.findAllBlogs)

router.post('/blogs', controller.createOneBlog)
router.delete('/blogs', controller.deleteOneBlog)

module.exports = router;
const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({status:1});
}) // GET on this route will return back a node server status.

router.get('/db', controller.checkDBStatus) // GET on this route will return back a mongoDB connection status.

router.get('/blogs', controller.findAllBlogs) // GET on this route will return back ALL blogs in the MongoDB collection.

router.get('/blogs/:id', controller.findOneBlog) // GET on this route will return back one blog based on the unique ID.

router.post('/blogs', controller.createOneBlog) // POST on this route will create a new blog with the data supplied in the payload.

router.delete('/blogs/:id', controller.deleteOneBlog) // DELETE on this route will delete a blog based on the unique ID.

router.put('/blogs/:id', controller.updateOneBlog) // PUT on this route will update the blog ID specified, with data in the payload.

// Exporting router for use with Express app.
module.exports = router;
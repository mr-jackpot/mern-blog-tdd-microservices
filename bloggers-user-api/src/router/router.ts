const controller = require("../controller/controller")
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send({status:1});
})

router.get('/api/db', controller.checkDBStatus)

router.get(`/api/user`, (req, res) => {
      res.send("Hello from user api!")
    } 
  )
  
module.exports = router;
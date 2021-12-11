import express from 'express';

//enable env file
require('dotenv').config()
const controller = require('../src/controller/controller.js')

const app = express();
const port = 3010;

app.get('api/dbConnectionCheck', controller.checkDBStatus)

app.get(`/api/user`, (req, res) => {
      res.send("Hello from user api!")
    } 
  )

app.listen(port, () => {
  console.log(`Application is running on port ${port} 🚀.`);
});
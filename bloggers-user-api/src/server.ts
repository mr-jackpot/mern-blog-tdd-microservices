import express from 'express';

//Globally enable env file
require('dotenv').config()

const app = express();
const port = 3010;
const router = require('./router/router')

app.use('/', router);

app.listen(port, () => {
  console.log(`Application is running on port ${port} 🚀.`);
});
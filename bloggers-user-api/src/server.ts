import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

//Globally enable env file
require('dotenv').config()

const app = express();
const port = 3010;
const router = require('./router/router')

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/', router);
app.use(cors({
  origin: `http://localhost:3000`, // e.g. http://localhost:3000
  credentials: true
}))

app.listen(port, () => {
  console.log(`Application is running on port ${port} 🚀.`);
});
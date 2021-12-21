const express = require('express')
const app = express()
const port = 3005
const router = require('./routes/router')
const bodyParser = require('body-parser');
const cors = require('cors')

// Allow parsing of incoming HTTP requests.
app.use(cors({
  origin: `http://localhost:3000`, // e.g. http://localhost:3000
  credentials: true
}))

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Express app is using a routes defined in the 'router.js' file.
app.use('/', router);

// Express app is listening on specified PORT.
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require('express')
const app = express()
const port = 3005
const router = require('./routes/router')

app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.send('');
})

router.get('/status', (req, res) => {
    res.send('Server is running!');
})

module.exports = router;
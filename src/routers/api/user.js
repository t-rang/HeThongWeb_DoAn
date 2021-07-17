const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
	res.send('Hello World');
});

router.get('/register', (req, res) => {
	res.send('Success');
});

module.exports = router;


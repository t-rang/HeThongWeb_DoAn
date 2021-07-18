const router = require('express').Router();
router.use('/user', require('./user.router'));
router.use('/course', require('./course.router'));

module.exports = router;
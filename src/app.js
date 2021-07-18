const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/hethongweb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});
require('./models/user.model');
require('./models/course.model');

const routers = require('./routers');
app.use(routers)
app.listen(3000, () => {
	console.log('Hi.')
});

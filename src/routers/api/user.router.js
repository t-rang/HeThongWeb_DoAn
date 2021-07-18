const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

router.post('/register', async (req, res) => {
	const { username, password, role } = req.body;
	const user = await UserSchema.findOne({ username });

	if (user) {
		res.status(404).send({ message: "Username này đã tồn tại. Vui lòng chọn username khác." });
		return;
	}

	const createdUser = await UserSchema.create({
		username, password, role: 'user',
	});
	console.log({ createdUser });
	return res.status(200).send(createdUser);
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await UserSchema.findOne({ username });

	if (user && user.password === password) {
		res.status(200).send({ message: "Xin chào " + user.role + " " + user.username, user });
		return;
	}

	return res.status(404).send({ message: "Username hoặc password sai. Vui lòng nhập lại." });
});

module.exports = router;


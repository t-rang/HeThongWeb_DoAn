const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const UserSchema = mongoose.model('User');

router.post('/register', async (req, res) => {
	const { fullname, email, username, password } = req.body;
	const user = await UserSchema.findOne({ username });

	if (user) {
		res.status(404).send({ message: "Username này đã tồn tại. Vui lòng chọn username khác." });
		return;
	}

	const createdUser = await UserSchema.create({
		fullname, email, username, password
	});
	return res.status(200).send({ message: "Đăng ký thành công. Mời bạn đăng nhập với username " + username });
});

router.post('/login', async (req, res) => {
	const { username, password } = req.body;
	const user = await UserSchema.findOne({ username });

	if (user && user.password === password) {
		return res.status(200).send(user);
	}
	return res.status(404).send({ message: "Username hoặc password sai. Vui lòng nhập lại." });
});

module.exports = router;


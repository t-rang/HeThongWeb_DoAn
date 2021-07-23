const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    fullname: String,
    email: String,
    username: String,
    password: String,
});

mongoose.model('User', UserSchema);
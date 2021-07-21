const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    id: ObjectId,
    name: String,
    email: String,
    username: String,
    password: String,
    role: String,
});

mongoose.model('User', UserSchema);
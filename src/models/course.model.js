const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema({
    id: ObjectId,
    title: String,
    image: String,
    desc: String,
    duration: Number,
    practice: Number,
    students: Number,
});
CourseSchema.index({ "$**": "text" })


mongoose.model('Course', CourseSchema);
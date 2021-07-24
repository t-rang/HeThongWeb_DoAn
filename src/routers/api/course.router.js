const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const CourseSchema = mongoose.model('Course');

router.post('/', async (req, res) => {
    const { title, img, desc, duration, practice, students } = req.body;
    const course = await CourseSchema.findOne({ title });
    if (course) {
        res.status(404).send({ message: "Tên khoá này đã tồn tại. Vui lòng chọn tên khoá khác." });
        return;
    }
    const createdCourse = await CourseSchema.create({
        title, img, desc, duration, practice, students
    });
    return res.status(200).send(createdCourse);
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    const course = await CourseSchema.findById(ObjectId(id));
    if (course) {
        const title = course.title;
        await CourseSchema.deleteOne({ "_id": ObjectId(id) });
        return res.status(200).send({ message: "Đã xoá khoá " + title });
    }
    res.status(404).send({ message: "Lỗi. Khoá không tồn tại." });
    return;
});

router.patch('/:id', async (req, res) => {
    const id = req.params.id;
    const course = await CourseSchema.findById(ObjectId(id));
    if (course) {
        Object.assign(course, req.body);
        const updatedCourse = await course.save();
        return res.status(200).send({ message: "Đã cập nhật khoá " + updatedCourse.title });
    };
    res.status(404).send({ message: "Lỗi. Khoá không tồn tại." });
    return;
});

router.post('/search', async (req, res) => {
    const { searchString } = req.body;
    const result = await CourseSchema.find({ $text: { $search: searchString } },
    );
    return res.status(200).send(result);
});

router.get('/', async function (req, res) {
    const allCourses = await CourseSchema.find();
    return res.status(200).send(allCourses);
})

router.get('/:id', async function (req, res) {
    const id = req.params.id;
    const course = await CourseSchema.findById(ObjectId(id));
    if (!course) {
        return res.status(404).send({ message: "Lỗi. Khoá không tồn tại." });
    }
    return res.status(200).send(course);
})

module.exports = router;

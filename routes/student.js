const express = require('express');
const studentController = require('../controller/student');

const router = express.Router();

router
    .post('/', studentController.createStudent)
    .get('/', studentController.getAllStudents)
    .get('/:id', studentController.getStudent)
    .put('/:id', studentController.replaceStudent)
    .patch('/:id', studentController.updateStudent)
    .delete('/:id', studentController.deleteStudent)

exports.router = router;
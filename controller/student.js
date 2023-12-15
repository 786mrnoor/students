const model = require('../model/student');

const { Student } = model;

exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        const doc = await student.save();
        res.json(doc);
    }
    catch (err) {
        if(err.code === 11000){
            res.set('Content-Type', 'text/plain');
            res.send('duplicate');
        }
        else{
            res.json(err);
        }
    }
}
exports.getAllStudents = async (req, res) => {
    try {
        let students = await Student.find();
        res.json(students);
    }
    catch (err) {
        res.json(err);
    }
}
exports.getStudent = async (req, res) => {
    const id = req.params.id;
    try {
        let student = await Student.findOne({ _id: id });
        res.json(student);
    }
    catch (err) {
        res.json(err);
    }
}
exports.replaceStudent = async (req, res) => {
    const id = req.params.id;
    try {
        let student = await Student.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.json(student);
    }
    catch (err) {
        res.json(err);
    }
}
exports.updateStudent = async (req, res) => {
    const id = req.params.id;
    try {
        let student = await Student.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.json(student);
    }
    catch (err) {
        res.json(err);
    }
}
exports.deleteStudent = async (req, res) => {
    const id = req.params.id;
    try {
        let student = await Student.findOneAndDelete({ _id: id });
        res.json(student);
    }
    catch (err) {
        res.json(err);
    }
}
const mongoose = require('mongoose');

const {Schema} = mongoose;

const studentSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    name: {type: String, required: true, trim: true, uppercase: true},
    dob: {type: Date, required: true,  max:"2017-12-31T18:30:00.000Z"},
    gender: {type: String,   enum:['Male', 'Female'], required: true}
});

exports.Student = mongoose.model('Student', studentSchema);
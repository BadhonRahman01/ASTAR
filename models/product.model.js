var mongoose = require('mongoose')
const CourseSchema = new mongoose.Schema({
 courseName: String,
 courseCode: Number,
 content: String,
 question: String,
 comments: String,
 image: String
})
var Course = mongoose.model('Course', CourseSchema)
module.exports = Course

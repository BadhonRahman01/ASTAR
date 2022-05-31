var mongoose = require('mongoose')
const SignUpSchema = new mongoose.Schema({
 FName: String,
 LName: String,
 Dept: String,
 EmAddress: String,
 ContNumber: Number,
 Password: String
})
var SignUp = mongoose.model('SignUp', SignUpSchema)
module.exports = SignUp
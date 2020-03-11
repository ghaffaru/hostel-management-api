const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Student', studentSchema)
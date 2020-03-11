const mongoose = require('mongoose')

const studentSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    middle_name: {
        type: String,
        required: false
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    year: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model('Student', studentSchema)
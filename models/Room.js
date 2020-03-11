const mongoose = require('mongoose')

const roomSchema = mongoose.Schema({

    roomNumber: {
        type: String,
        required: true
    },

    capacity: {
        type: Number,
        required: true
    },
    furniture: {
        type: Array,
        required: true
    }
})

module.exports = mongoose.model('Room', roomSchema)
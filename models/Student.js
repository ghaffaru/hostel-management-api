const mongoose = require("mongoose");

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
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  dateOfBirth: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true
  },
  exit: {
    type: Boolean,
    default: false
  },
  amount: {
    type: Number,
    required: true
  },
  program: {
    type: String,
    required: true
  },
  level: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Student", studentSchema);

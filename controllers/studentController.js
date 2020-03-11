const Student = require("../models/Student");

exports.register = function(req, res, next) {
  Student.find({ email: req.body.email, year: req.body.year })
    .exec()
    .then(docs => {
      if (docs.length > 0) {
        res.status(422).json({
          message: "Student already Registered"
        });
      } else {
        const student = new Student({
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          middle_name: req.body.middlename,
          email: req.body.email,
          phone: req.body.phone,
          dateOfBirth: Date.parse(req.body.date_of_birth),
          year: req.body.year,
          room: req.body.room
        });

        student
          .save()
          .then(result => {
            res.status(201).json({
              message: "Student Registered",
              student: result
            });
          })
          .catch(err => {
            res.status(422).json(err);
          });
      }
    });
};

exports.update = (req, res, next) => {
  Student.findById(req.params.student_id)
    .exec()
    .then(student => {
      Student.updateOne(
        {
          _id: req.params.student_id
        },
        {
          $set: {
            first_name: req.body.first_name
              ? req.body.first_name
              : student.first_name,
            last_name: req.body.last_name
              ? req.body.last_name
              : student.last_name,
            middle_name: req.body.middle_name
              ? req.body.middle_name
              : student.middle_name,
            phone: req.body.phone ? req.body.phone : student.phone,
            email: req.body.email ? req.body.email : student.email,
            dateOfBirth: req.body.date_of_birth
              ? req.body.date_of_birth
              : student.dateOfBirth,
            year: req.body.year ? req.body.year : student.year,
            room: req.body.room ? req.body.room : student.room,
            exit: req.body.exit ? req.body.exit : student.exit
          }
        }
      )
        .exec()
        .then(result => {
          res.status(200).json({
            message: "Student detail updated"
          });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(500).json(err);
    });
};

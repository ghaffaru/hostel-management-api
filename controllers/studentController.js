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

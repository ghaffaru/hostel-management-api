const Admin = require("../models/Admin");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

exports.register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const admin = new Admin({
      name: req.body.name,
      email: req.body.email,
      password: hash
    });

    admin
      .save()
      .then(result => {
        res.json({
          message: "Admin Registered",
          admin: result
        });
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });
  //   console.log(passwordToStore);
};

exports.login = (req, res, next) => {
  Admin.find({
    email: req.body.email
  })
    .exec()
    .then(docs => {
      if (docs.length == 1) {
        bcrypt.compare(req.body.password, docs[0].password, (err, result) => {
          if (err) {
            return res.status(422).json({ error: "Credentials do not match" });
          } else if (result) {
            const token = jwt.sign(
              {
                _id: docs[0]._id,
                email: docs[0].email
              },
              process.env.JWT_KEY,
              {
                expiresIn: "1h"
              }
            );
            res.status(200).json({
              message: "Auth succeeded",
              token: token
            });
          }
        });
      } else {
        res.status(404).json({
          error: "Credentials do not match"
        });
      }
    })
    .catch(err => {
      res.json(err);
    });
};

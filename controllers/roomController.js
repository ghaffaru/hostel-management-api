const Room = require("../models/Room");

exports.add = (req, res, next) => {
  Room.find({
    roomNumber: req.body.room_number
  })
    .exec()
    .then(docs => {
      if (docs.length > 0) {
        res.status(422).json({
          error: "Room already added"
        });
      } else {
        const room = new Room({
          roomNumber: req.body.room_number,
          capacity: req.body.capacity,
          furniture: req.body.furniture,
          price: req.body.price
        });

        room
          .save()
          .then(result => {
            res.status(200).json({
              message: "Room Added"
            });
          })
          .catch(err => {
            res.status(422).json(err);
          });
      }
    });
};

exports.update = (req, res, next) => {
  const _id = req.params.room_id;
  Room.findById(_id)
    .exec()
    .then(room => {
      const data = {
        roomNumber: req.body.room_number
          ? req.body.room_number
          : room.roomNumber,
        furniture: req.body.furniture ? req.body.furniture : room.furniture,
        capacity: req.body.capacity ? req.body.capacity : room.capacity,
        price: req.body.price ? req.body.price : room.price
      };
      Room.updateOne(
        { _id: _id },
        {
          $set: {
            roomNumber: data.roomNumber,
            furniture: data.furniture,
            capacity: data.capacity,
            price: data.price
          }
        }
      )
        .exec()
        .then(result => {
          res.status(200).json({
            message: "Room Updated",
            room: result
          });
        })
        .catch(err => {
          res.status(500).json(err);
        });
    })
    .catch(err => {
      res.status(404).json({
        error: err
      });
    });
};

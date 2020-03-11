const express = require("express");

const roomController = require("../controllers/roomController");

const auth = require("../middleware/auth");

const router = express.Router();

router.post("/room/add", auth, roomController.add);

router.put('/room/:room_id', auth, roomController.update);

module.exports = router;

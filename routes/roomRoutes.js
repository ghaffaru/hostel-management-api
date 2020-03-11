const express = require("express");

const roomController = require("../controllers/roomController");

const auth = require("../middleware/auth");

const router = express.Router();

router.post("/room/add", auth, roomController.add);

module.exports = router;

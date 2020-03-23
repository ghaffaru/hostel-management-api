const express = require("express");

const router = express.Router();

const studentController = require("../controllers/studentController");

const auth = require("../middleware/auth");

router.get('/students', auth, studentController.index);

router.post("/student/register", auth, studentController.register);

router.put("/student/:student_id/update", auth, studentController.update);

module.exports = router;

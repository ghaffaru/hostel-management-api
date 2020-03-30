const express = require("express");

const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024
  }
});

const router = express.Router();

const studentController = require("../controllers/studentController");

const auth = require("../middleware/auth");

router.get("/students", auth, studentController.index);

router.post(
  "/student/register",
//   upload.single("avatar"),
  auth,
  studentController.register
);

router.put("/student/:student_id/update", auth, studentController.update);

module.exports = router;

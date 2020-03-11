const express = require("express");

const router = express.Router();

const userController = require('../controllers/studentController')

const auth = require('../middleware/auth');

router.post('/student/register', auth,  userController.register)

module.exports = router;
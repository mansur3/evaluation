const express = require("express");
const router = express.Router();


const Lecture = require("../models/lecture.model");
const authenticate = require("../middlewares/authenticate");
const auth = require("../middlewares/auth");






module.exports = router;
const express = require("express");
const router = express.Router();


const Lecture = require("../models/lecture.model");
const authenticate = require("../middlewares/authenticate");
const auth = require("../middlewares/auth");

router.post("/", authenticate, auth(["instructor", "admin"]), async(req, res) => {

    let lecture = await Lecture.create(req.body);

    return res.status(201).send(lecture);


})




module.exports = router;
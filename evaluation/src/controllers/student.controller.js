const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();



const Student = require("../models/student.model");


function newToken(user) {
    return jwt.sign({user}, process.env.KEY);
}




router.post("/", async (req, res) => {
    let student = await Student.create(req.body);

    let token = newToken(student);

    return res.status(201).send({student, token});
})

router.get("/", async (req, res) => {
    let student = await Student.find().lean().exec();




    return res.status(200).send(student);
})




module.exports = router;
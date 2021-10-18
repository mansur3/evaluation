const express = require("express");
const router = express.Router();


const Student = require("../models/student.model");


router.post("/", async (req, res) => {
    let student = await Student.create(req.body);

    return res.status(201).send({student});
})




module.exports = router;
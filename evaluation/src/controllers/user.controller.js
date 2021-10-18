const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/user.model");
const upload = require("../middlewares/file-upload");

function newToken(user) {
    return jwt.sign({user}, process.env.KEY);
}



router.post("/register",upload.single("profile_pic") ,async (req, res) => {


    let user = await User.findOne({email : req.body.email});
    if(user) return res.status(400).send({status: "falied" , message : "User already exists"});

    let userdata = await User.create({
        name : req.body.name,
        email : req.body.email,
        profile_pic : req.file.path,
        roles : req.body.roles
    });

    let token = newToken(userdata);


    return res.status(201).send({status : "success", message : "user created", userdata, token});


})




module.exports = router;
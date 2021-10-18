const express = require("express");
const router = express.Router();


const Lecture = require("../models/lecture.model");
const authenticate = require("../middlewares/authenticate");
const auth = require("../middlewares/auth");

router.post("/", authenticate, auth(["instructor", "admin"]), async(req, res) => {
    // console.log(req.user);
    // let check = await Lecture.findOne({})
    // if(req.user._id)

    let lecture = await Lecture.create(req.body);

    return res.status(201).send(lecture);


})




router.get("/", async (req, res) => {
    let lectures = await Lecture.find().lean().exec();

    return res.status(200).send(lectures);
})


router.patch("/:id", authenticate, auth(["instructor", "admin"]), async (req, res) => {
    // console.log(req.user);
    // let check = await Lecture.findOne({instructor : req.user._id}).lean().exec();
    // if(check) {
        let lecture = await Lecture.findByIdAndUpdate(req.params.id, req.body, {new : true});


          return res.status(201).send({message : "Updated Succesfully",  lecture});
    // } else {
    //     return res.status(400).send({message : "error"})
    // }
    // if(req.user._id == )


    
})


router.delete("/:id", authenticate, auth(["instructor", "admin"]), async (req, res) => {
    let lecture = await Lecture.findByIdAndDelete(req.params.id).lean().exec();


    return res.status(200).send({message: "lecture is deleted", lecture});
})

router.get("/:id", async (req, res) => {
    let lecture = await Lecture.findOne({_id : req.params.id});

    return res.status(200).send(lecture);
})



module.exports = router;
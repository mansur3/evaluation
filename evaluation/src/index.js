const express  = require("express");
const app = express();


app.use(express.json());

const userController = require("./controllers/user.controller");
const studentController = require("./controllers/student.controller");

app.use("/user", userController);
app.use("/student", studentController);





module.exports = app;
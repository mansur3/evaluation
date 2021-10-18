const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    password : {type : String, required : true},
    profile_pic : {type : String},
    roles : [{type : String, required : true}]
})


userSchema.pre("save", function(next) {
    if(!this.isModified("password")) return next();

    let hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    next();
})



userSchema.methods.checkPassword = function(password) {
    const match = bcrypt.compareSync(password, this.password);
    return match;
}





const User = mongoose.model("user", userSchema);




module.exports = User;
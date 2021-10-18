const jwt = require("jsonwebtoken");
require("dotenv").config();

function tokenVerify(token) {
    return new Promise(function(reject, resolve) {
       jwt.verify(token, process.env.KEY, function(err, user) {
        if(err) return reject(err);
        return resolve(user);    
       }) ;
    }
}

async function authenticate(req, res, next) {
    let bearerToken = req.headers.authorization;
    if(!bearerToken || !bearerToken.startsWith("Bearer ")) return res.status(400).send({status : "failed", message : "Please provide a bearer token"});


    let token = bearerToken.split(" ")[1];


    let {user} = await tokenVerify(token);
    req.user = user;
    next();




}

module.exports = authenticate;
function permission(permitted) {
    return (req, res, next) => {
        let allowed = false;

        req.user.roles.map(role => {
            if(permitted.includes(role)) {
                allowed = true;
            }
        })


        if(allowed == true) {
            next();
        } else {
            return res.status(403).send({ message : "you are eligable"});
        }
    }
}
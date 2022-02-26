const jwt = require("jsonwebtoken");
const verifyAuth = async (req,res,next) => {
    try {
        let token = req.header("authorization").split(" ")[1];
        let payload = await jwt.verify(token,"");
        req.email = payload.email;
        req.userId = payload.userId;
        next();   
    } catch (error) {
        return res.status(401).json({
            message : "unauthorised"
        });
    }
}
module.exports = verifyAuth;
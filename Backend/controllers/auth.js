const auth = require("../models/auth");
const jwt = require("jsonwebtoken");
exports.signup = async (req,res,next) => {
    try {
        let email = req.body.email;
        let name = req.body.name;
        let password = req.body.password;
        let userType = req.body.userType;
        if(!email || !name || !password || !userType){
            return res.status(400).json({
                message : "validation failed"
            });
        }
        let user = await auth.findOne({
            email : email
        });
        if(user){
            return res.status(409).json({
                message : "user already exists"
            })
        }
        let newUser = new auth({
            name : name,
            email : email , 
            password : password,
            userType : userType
        });
        await newUser.save();
        return res.status(200).json({
            message : "user created"
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message : error.message
        })
    }
}
exports.login = async (req,res,next) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let user = await auth.findOne({
            email : email
        });
        if(!user){
            return res.status(404).json({
                message : "user doesn't exist"
            })
        }
        if(user.password === password){
            let token = await jwt.sign({
                email : email,
                userId : user._id
            },"ieiuuirdjdfjidfuiu");
            return res.status(200).json({
                message : "success",
                token : token
            });
        }else{
            throw new Error("incorrect password");
        }
    } catch (error) {
        return res.status(500).json({
            message : error.message
        })
    }
}
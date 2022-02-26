const mongoose = require("mongoose");

const schema = mongoose.Schema;

const authSchema = schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String , 
        required : true
    },
    password : {
        type : String,
        required : true
    },
    userType : {
        type : String,
        default : "User",
        
    }
});
mongoose.model("auth",authSchema);
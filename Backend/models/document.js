const mongoose = require("mongoose");
const schema = mongoose.Schema;

const documentSchema = new schema({
    docPurpose : {
        type : String,
        required : true
    },
    docUrl : {
        type :String ,
        required : true
    },
    ruleId : {
        type : mongoose.Schema.Types.ObjectId,
        required: true
    },
    isVerified : {
        type : Boolean,
        default : false
    },
    fieldNotValid : [
        {
            fieldName : {
                type : String,
                required : true
            },
            ExpectedValue : {
                type : String , 
                default : "Not Known"
            }
        }
    ],
    lastVerificationAt : {
        type : Date ,
        required : false
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required:true
    }
},{timestamps : true});
module.exports = mongoose.model("document",documentSchema);
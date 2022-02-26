const mongoose = require("mongoose");
const schema = mongoose.Schema;

const ruleSchema = new schema({
    docPurpose : {
        type : String ,
        required : true
    },
    fieldsToVerify: [
        {
            fieldName : {
                type : String,
                required : true
            },
            fieldType : {
                type : String,
                required : true,
                enum:["Text","Image"]
            }
        }
    ]
})

module.exports = mongoose.model("Rules",ruleSchema);
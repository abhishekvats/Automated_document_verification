const document = require("../models/document");
const rule = require("../models/rules");
let {imgRecog} = require("../imgRecognize");
exports.uploadADocument = async (req,res,next) => {
    if(!(req.file)){
        return res.status(400).json({
            message : "no file is uploaded ,please upload one",
            statusCode : 400
        });
    }
    let ruleId = req.body.ruleId;
    let docUrl = req.file.path;
    let docData = new document({
        docPurpose : req.body.docPurpose,
        ruleId : ruleId,
        docUrl : docUrl,
        userId : req.userId
    });
    await docData.save();
    return res.status(200).json({
        message : "upload success"
    });
}
exports.verifyDocument = async (req,res,next) => {
    let docId = req.body.docId;
    let docData = await document.findById(docId);
    if(!docData){
        return res.status(404).json({
            message : "document not found",
            statusCode : 404
        })
    }
    let ruleData = await rule.findById(docData.ruleId);
    let fieldsNotValid = [];
    for(let i = 0;i<ruleData.fieldsToVerify.length;i++){
        let field = ruleData.fieldsToVerify[i];
        if(field.fieldType === "Text"){
            // verify tezt
            // verification using text;
            let str = await imgRecog(docData.docUrl);
            const reg1 = new RegExp(field.fieldName,"i");
            const reg2 = new RegExp("Bhanu Arora","i");
            if(!(str.match(reg1) && str.match(reg2))){
                fieldsNotValid.push({
                    fieldName : field.fieldName,
                    ExpectedValue : "Bhanu Arora"
                })
            }
        }else{
            // verification using image;
            
        }
    }
    docData.fieldsNotValid = fieldsNotValid;
    if(fieldsNotValid.length === 0){
        docData.isVerified = true;
    }
    await docData.save();
    return res.status(200).json({
        message : docData.isVerified ? "successfully verified": "verification failed",
        statusCode : 200,
        fieldsNotValid
    })
}
exports.getUserDocs = async (req,res,next) => {
    let userId = req.userId;
    let allDocs = await document.find({
        userId : req.userId
    });
    return res.status(200).json({
        message : "success",
        allDocs : allDocs
    })
}
const mongoose=require("mongoose");
const express=require('express');
const Rule=require("../models/rules.js");
exports.addRule=(req,res,next)=>{
    //const docPurpose=req.body.docPurpose;
    //const fileds=req.body.fieldsToVerify;
    const rule=new Rule({
        docPurpose:req.body.docPurpose,
        fieldsToVerify:req.body.fields
    });
    rule.save().then(result=>{
        console.log("new rule added");
        res.status(200).json(rule);
    }).catch(err=>{
        console.log(err);
    })
};

exports.deleteRule=(req,res,next)=>{
    const id=req.body.id;
    Rule.findByIdAndRemove(id).then(result=>{
        res.status(200).json("Rule deleted Successfully");
    }).catch(err=>{
        console.log(err);
    })
}

exports.updateRule=(req,res,body)=>{
    const id=req.body.id;
    if(req.body.docPurpose && req.body.fields){
        Rule.updateOne({_id:id},{docPurpose:req.body.docPurpose},{$pull:{fieldsToVerify:req.body.fields}}).then(result=>{
            res.status(200).json("updated");
        }).catch(err=>{
            console.log(err);
        })
    }
    else if(req.body.docPurpose){
        Rule.updateOne({_id:id},{docPurpose:req.body.docPurpose}).then(result=>{
            res.status(200).json("updated");
        }).catch(err=>{
            console.log(err);
        })
    }
    else if(req.body.fields){
        Rule.updateOne({_id:id},{$push:{fieldsToVerify:req.body.fields}}).then(result=>{
            res.status(200).json("updated");
        }).catch(err=>{
            console.log(err);
        })
    }
}
exports.getRules = async (req,res,next) => {
    const rules = await Rule.find();
    return res.status(200).json({
        message : "success",
        rules : rules
    })
}
// const { createWorker } = require('tesseract.js');

// const worker = createWorker({
//   logger: m => console.log(m)
// });


// const imgRecog = async (req,res) => {
  //   await worker.load();
  //   await worker.loadLanguage('eng');
  //   await worker.initialize('eng');
  //   const { data: { text } } = await worker.recognize('./public/ab.jpeg');
  //   console.log(text);
//   await worker.terminate();
//   return res.redirect('./public/try.jpeg');
// }
// module.exports = {
  //     imgRecog
  // }
  
const path = require("path");
const aws = require("aws-sdk");
aws.config.update({
  secretAccessKey : "",
  accessKeyId: "",
  region : "us-east-2"
});
const fs = require("fs");
const textRact = new aws.Textract({region : "us-east-2"});

exports.imgRecog = (imageName) => {
  return new Promise((resolve,reject) => {
    fs.readFile(path.join(__dirname , "public", imageName),{},(err,data) => {
      if(err){
        console.log(err);
        return err;
      }
      console.log(data);
      textRact.analyzeDocument({
        Document : {
          Bytes : data
        },
        FeatureTypes : ["FORMS"]
      },(err,data1) => {
        if(err){
          console.log(err);
          return err;
        } 
        console.log(data1);
        let data2 = data1.Blocks;
        let str = "";
        for(let i = 0;i<data2.length ;i++){
          if(data2[i].Text){
            str += (data2[i].Text + " ") ;
          }else{
            console.log(data2[i].Geometry);
          }
        }
        console.log(str);
        resolve(str);
      })
    } );
  })
}
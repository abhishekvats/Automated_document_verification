const mongoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
const {imgRecog} = require("./imgRecognize");
const path = require("path");
const auth = require("./controllers/auth");
const authVerify = require("./utils/authVerify");
const rulesController=require("./controllers/rules.js");

app.use(cors({
    origin : "*"
}));
app.use(express.json());
const multer = require("multer");
const docController = require("./controllers/document");
// const path = require("path");
let storage = multer.diskStorage({
    destination : (req,file, cb) => {
        cb(null,path.join(__dirname,"images"));
    },
    filename : (req,file,cb) => {
        cb(null,file.originalname + new Date().getTime());
    }
});
app.use(multer({
    storage : storage,
    limits : {
        fileSize : 52428800 // 50 MB max upload size
    },
    fileFilter:(req,file,cb) => {
        if(file.mimetype === "pdf" || file.mimetype === "png" ||file.mimetype === "jpg" || file.mimetype === "jpeg"){
            cb(null,true);
        }else {
            cb(new Error("your document has invalid mimetype"));
        }
    }
}).single("doc"));
// app.use(express.static(path.join(__dirname,"public")));

app.post("/signup",auth.signup);

app.post("/login",auth.login);

app.get("/imgRecognize",authVerify,imgRecog);

app.post("/uploadDocument",authVerify,docController.uploadADocument);

app.post("/verifyDocument",authVerify,docController.verifyDocument);

app.post("/addrule",authVerify,rulesController.addRule);

app.delete("/deleteRule",authVerify,rulesController.deleteRule);

app.put("/updateRule",authVerify,rulesController.updateRule);
mongoose.connect("")
.then((result) => {
    console.log("connected");
    app.listen(8080);
})
.catch((err) => {
    console.log(err.message);
})
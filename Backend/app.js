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
        cb(null,new Date().getTime() + file.originalname );
    }
});
app.use(multer({
    storage : storage,
    limits : {
        fileSize : 52428800 // 50 MB max upload size
    }
}).single("doc"));
// app.use(express.static(path.join(__dirname,"public")));

app.post("/signup",auth.signup);

app.post("/login",auth.login);

app.get("/imgRecognize",imgRecog);

app.post("/uploadDocument",authVerify,docController.uploadADocument);

app.post("/verifyDocument",authVerify,docController.verifyDocument);

app.post("/addrule",authVerify,rulesController.addRule);

app.delete("/deleteRule",authVerify,rulesController.deleteRule);

app.put("/updateRule",authVerify,rulesController.updateRule);

app.get("/getRules",authVerify,rulesController.getRules);

app.get("/getUserDocs",authVerify,docController.getUserDocs);
mongoose.connect('mongodb+srv://avenger:CwPyURjW3wJABQMD@cluster0.lhtgd.mongodb.net/docVerify?retryWrites=true&w=majority')
.then((result) => {
    console.log("connected");
    app.listen(8080);
})
.catch((err) => {
    console.log(err.message);
})
const fs = require('fs');

const express = require('express');
const https = require('https');
const path = require('path');

const bodyParser = require("body-parser");


const router = express.Router();

exports.getFile = (req,res,next) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
};

exports.getFrequency = (req,res,next) =>{
    https.get("https://terriblytinytales.com/test.txt",response =>{
        const file = fs.createWriteStream('data.txt');
        var stream = response.pipe(file);
        stream.on('finish',function(){
            console.log("done react");
            var c = fs.readFileSync("data.txt");
            var content = c.toString();
            var contentArray = content.split(" ");
            const hashMap = new Map();
            contentArray.forEach((i)=>{
                if(hashMap.has(i)){
                    hashMap.set(i,hashMap.get(i)+1);
                }
                else{
                    hashMap.set(i,1);
                }
            });
            console.log(hashMap.size);
            const finalres = new Map([...hashMap.entries()].sort((a,b)=>b[1]-a[1]));
            console.log(finalres.size);
            // console.log(finalres);
            const fobj = {};
            finalres.forEach((val,key)=>{
                fobj[key.toString()] = val.toString();
            });
            // console.log(fobj);
            res.status(200).json({
                message:"osacksamc",
                d:fobj
            });
        });
        
    })
    

};
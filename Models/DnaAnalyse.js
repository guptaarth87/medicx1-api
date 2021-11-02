const mongoose = require('mongoose');

const Schema =mongoose.Schema;

const DnaAnalyseSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobileNo:{
        type:String,
        required:true
    },
    address:{
       type:String,
       required:true
    },
    postal_code:{
       type:String,
       required:true
    }
})

module.exports=mongoose.model('DnaAnalyse',DnaAnalyseSchema,'DnaAnalyses');
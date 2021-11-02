const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const SpConsultancyDrSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
      type:String,
      required:true
    },
    speciality:{
        type:String,
        required:true
    },
    education:{
        type:String,
        required:true
    },
    experience:{
        type:String,
        required:true
    },
    clinic_address:{
        type:String,
        required:true 
    },
    rating:{
        type:Number,
        required:true
    }
})

module.exports=mongoose.model('SpConsultancyDr',SpConsultancyDrSchema,'SpConsultancyDrs');


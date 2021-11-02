const mongoose= require('mongoose');

const Schema = mongoose.Schema;

const CustomerSchema=new Schema({
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
   time:{
    type:String,
    required:true
   },
   booked_service:{
       type:String,
       required:true
   },
   consultancy_doctor:{
       type:String,
       required:true
   }
})

module.exports=mongoose.model('Customer',CustomerSchema,'Customers');
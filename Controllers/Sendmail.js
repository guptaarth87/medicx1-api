var nodemailer = require('nodemailer');
require('dotenv').config();


exports.send_mail=(req,res)=>{
   const reciever=req.params.reciever;
   const {
    name,
    email,
    mobileNo,
   
} = req.body;


   var transporter =nodemailer.createTransport({
       service:'gmail',
       auth:{
           user:process.env.EMAIL_ID,
           pass:process.env.EMAIL_PASS
       }
   });
   
   var mailOptions={
       from:process.env.EMAIL_ID,
       to:reciever,
       subject:'New customer here is the details',
       Text:`New Patient
        name:${name},
       email:${email},
       mobileNo:${mobileNo}`
   };
   
   transporter.sendMail(mailOptions,function(error,info){
       if(error){
           console.log(error)
       } else {
           console.log('Email sent '+ info.response);
           res.status(200).json({
               'message':"email sent!",
           })
       }
   });
}
const SpDoctors =require('../Models/SpConsultancyDr');

exports.spDoctors=(req,res)=>{
const speciality = req.params.speciality;
    SpDoctors.find({
        speciality: speciality
    }).then(result => {
        res.status(200).json({
            message: `Doctors fetched for category ${speciality}`,
            Doctors: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}

exports.spDoctorsbyid=(req,res)=>{
    const id=req.params.id;
    SpDoctors.find({
         _id: id
    }).then(result=>{
        console.log(result)
        res.status(200).json({
            message:`Doctor of id ${id} fetched`,
            Doctor:result
        })
    }).catch(err=>{
        res.status(500).json({
            message:"error in db",
            error:err
        })
    })
}




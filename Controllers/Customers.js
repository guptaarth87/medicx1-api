const Customers=require('../Models/Customers');

exports.newCustomer=(req,res)=>{
    const {
        name,
        email,
        mobileNo,
        time,
        booked_service,
        consultancy_doctor,
    } = req.body;

    // create a new Object of the User Model class

    const userObj = new Customers({
        name:name,
        email:email,
        mobileNo:mobileNo,
        time: time,
        booked_service:booked_service,
        consultancy_doctor:consultancy_doctor
    });

    // we will call a save method on this object
    userObj.save().then(result => {
        res.status(200).json({
            message: "Patient Registered successfully !!",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}
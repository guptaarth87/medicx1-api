const Customers=require('../Models/DnaAnalyse');

exports.newCustomer=(req,res)=>{
    const {
        name,
        email,
        mobileNo,
        address,
        postal_code
    } = req.body;

    // create a new Object of the User Model class

    const userObj = new Customers({
        name:name,
        email:email,
        mobileNo:mobileNo,
        address:address,
        postal_code:postal_code

    });

    // we will call a save method on this object
    userObj.save().then(result => {
        res.status(200).json({
            message: "Customer Registered successfully !!",
            user: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Error in Database",
            error: error
        });
    });
}
const express=require('express');
const router=express.Router()

const userController = require('../Controllers/Users');
const customerController=require('../Controllers/Customers');
const DnaAnalyseController=require('../Controllers/DnaAnalyse');
const SpConsultancyDrController=require('../Controllers/SpConsultancyDr')
const sendmailControlller=require('../Controllers/Sendmail')


router.post('/login', userController.login);
router.post('/signup', userController.signup);

router.post('/newCustomer',customerController.newCustomer)
router.post('/DnaAnalyse',DnaAnalyseController.newCustomer)
router.post('sendmail/:reciever',sendmailControlller.send_mail)

router.get('/specificDr/:id',SpConsultancyDrController.spDoctorsbyid)
router.get('/SpConsultancyDr/:speciality',SpConsultancyDrController.spDoctors)
// export the router
module.exports = router; 





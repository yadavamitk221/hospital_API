const Doctor = require('../model/doctorSchema');
const jwt = require('jsonwebtoken');


// Controller to register new doctor in db
module.exports.registerDoctor = async function(req, res){
    try {
        // Find weather doctor with this email is presend in the db or not
        let doctor = await Doctor.findOne({email: req.body.email});
        // If doctor is present then return doctor is already registered
        if(doctor){
            return res.json({
                message:'Docotor is already present please signin using this URL'
            });
        }

        // If email is not in db then start the STEPS of regestering the Doctor 
        if(!doctor){

            // STEP 1: check weather the password and confirm password is same or not 
            if(req.body.password != req.body.confirmPassword){
                return res.json({
                    message:'Password and confirm password are not same'
                });
            }

            // STEP 2: If passwords anre matching then register the Doctor in db
            doctor = await Doctor.create(req.body);
            return res.json('200', {
                message:`Doctor with email: ${doctor.email} has been registered`
            });
        }

    }
    // If any error occour while creating the user then catch function will automatically run
    catch (error) {
        return res.json({
            message:'Internal server error'
        });
    }
}

// Action to signin the doctos and creating JWT token 
module.exports.create_session = async function(req, res){
    try {
        // Finding the doctor from the email
        let doctor = await Doctor.findOne({email: req.body.email});

        // if doctor not found of entered password is not match then show message
        if(!doctor || doctor.password != req.body.password){
            console.log("email:", req.body.email);
            console.log("password:", req.body.password);
            return res.json({
                message: "Invalid email ID or password"
            });
        }

        // else login the user and send the JWT TOken as response
        return res.json('200', {
            message:  "Login Successful",
            data: {
                token: jwt.sign(doctor.toJSON(), 'codeial', {expiresIn: '1d'})
            }
        });
        
    }
    // If any error occour while creating the user then catch function will automatically run
    catch (error) {
        return res.json({
            message:'Internal server error'
        });
    }
}
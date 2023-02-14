const Doctor = require('../model/doctorSchema');
const Patient = require('../model/patientSchema');
const Report = require('../model/reportSchema');

// Action for registering the patient in the DB
module.exports.registerPatient = async (req, res) => {
    try {
        // find if phone no is present in db or not
        let patient = await Patient.findOne({phone: req.body.phone});
        // if no. is not present in db then register the user with the number ib db
        if(!patient){   
            patient = Patient.create(req.body);
            return res.json('200', {
                message: "Successfully registered new user"
            });
        }
        // else send te message that user is already present in the db
        return res.json('200', {
            message: "User is already registered"
        });

    }
    // If any error occour while creating the user then catch function will automatically run
    catch (error) {
        console.log(`error in registering the user ${error}`);
        return res.json('400', {
            message: `error in registering the user ${error}`
        });
    }
}

// Action to create the report of Paient
// this action is only accessable when the doctor is logedin 
module.exports.create_report = async (req, res) => {

        try { 
            // find the patient by its id 
            let patient = await Patient.findById(req.params.id);
            // if patient found then create its report 
            if(patient){
                let newReport = await Report.create({
                    doctor: req.user._id,
                    patient: patient._id,
                    status: req.body.status
                });
                // push this newly created report into patient report field 
                patient.report.push(newReport);
                patient.save();
                return res.json('200', {
                    message: `successfully created the report`
                });
            }
            // Else send the message patient not foun
            return res.json('404', {
                message: `patient not found`
            });
    } 
    // If any error occour while creating the user then catch function will automatically run
    catch (error) {
        return res.json('400', {
            message: `error in creating the report for patient ${error}`
        });
    }   
}

// Action to display all the peoprts of sinle patient 
module.exports.all_reports = async (req, res)=>{
    try {
        // find the patient from the patient id and populate it's repors
        let patient = await Patient.findById(req.params.id).populate('report');
        // if no patient found then return the "Incorrect patient id" message
        if(!patient){
            return res.json({
                message: `Incorrect patient id`
            });
        }

        // else return all the reports of patient 
        return res.json('200', {
            message: `List of all the reports associated with ${patient.name}`,
            data: patient.report
        });
    }
    // If any error occour while creating the user then catch function will automatically run
    catch (error) {
        return res.json('400', {
            message: `error in creating the report for patient ${error}`
        });
    }
}



const Report = require('../model/reportSchema');

// action to display all the reports 
module.exports.allReports = async (req, res) => {
    
    try {
        // check if entered status is among all this four status
        if(req.params.status === 'Negative' || req.params.status === 'Travelled-Quarantine' || req.params.status === 'Symptoms-Quarantine' || req.params.status == 'Positive-Admit'){
            let allReports = await Report.find({status : req.params.status});
            // if every thing is correct it displays all the repors;
            return res.json('200', {
                message: `status is incorrect`,
                allReports: allReports
            }); 
        }
        return res.json({
            message: `status is incorrect`
        });
    } catch (error) {
        return res.json({
                message: `error in fetching the report ${error}`
        });
    }
}
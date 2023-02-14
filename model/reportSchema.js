const mongoose = require('mongoose');
const Patient = require('./patientSchema');
const Doctor = require('./doctorSchema');

const reportSchema = new mongoose.Schema({
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Patient'
    },
    status: {
        type: String,
        enum: ['Negative', 'Travelled-Quarantine', 'Symptoms-Quarantine',
            'Positive-Admit']
    }    
}, {
    timestamps: true
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
const mongoose = require('mongoose');
const Report = require('./reportSchema');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }, 
    phone: {
        type: String,
        required: true,
        unique: true
    },
    report: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report'
    }]
},{
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
# hospital_API
//design an API for the doctors of a Hospital which has been allocated by the govt for testing and quarantine + well being of COVID-19 patients

//Download this code and open it through vsCode
// run npm i in terminal for installing all the node modules used in this file
// finally do nodemon index.js to start the server


// 1) Doctor sign up
http://localhost:3000/doctors/register 

// 2) Doctor signin
//returns the JWT to be used 
http://localhost:3000/doctors/doctors/login

// 3) Patient register
http://localhost:3000/patients/register

// 4) create patient report if doctor is logedin
http://localhost:3000/patients/:id/create_report

// 5) Display single patient all report only if doctor is logedin 
http://localhost:3000/patients/:id/all_reports → List all the reports of a patient oldest to latest

// 6) display report of all the patients filtered by status 
http://localhost:3000/reports/:status → List all the reports of all the patients filtered by a specific status


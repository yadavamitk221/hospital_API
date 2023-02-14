const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hospital_API');

const db = mongoose.connection;

db.on('err', console.error.bind(console, "Error in connecting to the database"));

db.once("open", function(){
    console.log("Connected to database :: Mongodb");
})
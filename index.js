const express = require('express');
const port = 3000;
const db = require('./config/mongoose');
const app = express();
const passport = require('passport');
const passportJwt = require('./config/passport-jwt');

//Initializeing passport to user
app.use(passport.initialize());
// Calling urlencoded of express to read form data from URL
app.use(express.urlencoded());
// sending all the routers to route folder
app.use('/', require('./router'));

app.listen(port, (err)=>{
    if(err){
        console.log(`Error in starting the server ${err}`);
        return;
    }
    console.log(`My Express server is up and running on PORT ${port}`);
});

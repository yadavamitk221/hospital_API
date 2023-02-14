const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const Doctor = require('../model/doctorSchema');

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}

passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctor.findById(jwtPayLoad._id, function(err, doctor){
        if(err){
            console.log('Error in finding the user from JWT');
            return done(null, false);
        }
        if(doctor){
            return done(null, doctor); 
        }else{
            return done(null, false); 
        }
    });
}));

module.exports = passport;
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("./../config/config").get(process.env.NODE_ENV);

const SALT_I = 10;

// userSchema created..
const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
    name: {
        type: String,
        required: false,
        maxLength: 100
    },
    lastname: {
        type: String,
        maxLength: 100
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    }
});

// Middleware to hash password..
userSchema.pre('save', function(next){
    var user = this;

    if (user.isModified('password')){
        bcrypt.genSalt(SALT_I, function(err, salt){
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if (err) return next(err);
                user.password = hash;
                next();
            });
        });

    }else{
        next();
    }
});

// Schema method to access within model..
userSchema.methods.comparePassword = function(candidatePassword, cb){
     bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
         if (err) return cb(err);
         cb(null, isMatch);
     });
};

// Token Genarating method of User Model..
userSchema.methods.genarateToken = function(cb){
    var user = this;
    var token = jwt.sign(user._id.toHexString(), config.SECRET);
    user.token = token;

    user.save(function(err, user){
        if (err) return cb(err);
        cb(null, user);
    });
};

// Verifying token to auth middleware..
userSchema.statics.findByToken = function(token, cb){
    var user = this;

    jwt.verify(token, config.SECRET, function(err, decode){
        if (err) return cb(err);

        user.findOne({_id: decode, token: token}, function(err, user){
            if (err) return cb(err);
            cb(null, user);
        });
    });
};

// method to logout and this is remove the token..
userSchema.methods.deleteToken = function(token, cb){
    var user = this;

    user.update({$unset: {token: 1}}, function(err, user){
        if (err) return cb(err);
        cb(null, user);
    });
};

// User Model create..
const User = mongoose.model('User', userSchema);

module.exports = { User };

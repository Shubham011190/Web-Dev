const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
});

userSchema.pre('save', function (next) {            //'pre' implies do the function before doing the 'save'
    var user = this;

    
    if (user.isModified('password')) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
            if (err) return next(err);

            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) return next(err);
                user.password = hash;
                next();
            })
        })
    }
    else {
        next();
    }
});

userSchema.methods.comparePassword = function (plainpassword, cb) {
    bcrypt.compare(plainpassword, this.password, (err, isMatch) => {
        if (err) return cb(err);
        cb(null, isMatch)
    });
}

userSchema.methods.generateToken = function (cb) {
    jwt.sign(user._id.toHexString(), 'secret');
    user.token = token;
    user.save((err, user) => {
        if (err) return cb(err);
        cb(null, user);
    });
}


userSchema.statics.findByToken = (token, cb) => {
    var user = this;
    jwt.verify(token, 'secret', (err, decode) => {
        user.findOne({ _id: decode, "token": token }, (err, user) => {
            if (err) return cb(err);
            cb(null, user);
        })
    })
}

const User = mongoose.model('User', userSchema);

module.exports = { User };  
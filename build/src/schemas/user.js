'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var salt_factor = 10;

var Schema = _mongoose2.default.Schema;

var userSchema = new Schema({
    'firstName': {
        type: String,
        required: true
    },
    'lastName': {
        type: String,
        required: true
    },
    'email': {
        type: String,
        required: true
    },
    'password': {
        type: String,
        required: true
    },
    'phone': {
        type: String,
        required: true
    },
    'isPremium': {
        type: Boolean,
        default: false,
        required: false
    }
}, { 'collections': 'users', timestamps: true });

//realiza esto ANTES del save, llamado en index.js//
userSchema.pre('save', function (next) {
    var user = this;
    //Solo si el usuario modifica 
    if (!user.isModified('password')) return next();

    //generamos salt//
    _bcrypt2.default.genSalt(salt_factor, function (err, salt) {
        if (err) throw next(err);

        //mandamos la passwor al metodo hash bcrypt//
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

exports.default = _mongoose2.default.model('users', userSchema);
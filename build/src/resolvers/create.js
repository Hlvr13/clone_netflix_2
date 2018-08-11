'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _user = require('../schemas/user');

var _user2 = _interopRequireDefault(_user);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiresIn = '1d'; //tiempo de expiracion
var secret = 'secretpassword'; // secret key


var createToken = exports.createToken = function createToken(email, password) {
    if (!email || !password) {
        //verificar existencia de credenciales "password" e "email"
        return false;
    }

    var user = _user2.default.findOne({ 'email': email }).then(function (user) {
        var compare = new Promise(function (resolve, reject) {
            _bcrypt2.default.compare(password, user.password, function (err, res) {
                if (res) {
                    var payload = {
                        email: user.email,
                        id: user._id
                    };

                    var token = _jsonwebtoken2.default.sign(payload, secret, {
                        expiresIn: expiresIn
                    });

                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });
        return compare;
    }).catch();
    return user;
};
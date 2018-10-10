'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createToken = undefined;

var _jsonwebtoken = require('jsonwebtoken');

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _users = require('../schemas/users');

var _users2 = _interopRequireDefault(_users);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var expiresIn = '1d'; //time to live
var secret = 'esUnSecreto'; //secret key

var createToken = exports.createToken = function createToken(email, password) {
    if (!email || !password) {
        //si fallan las credenciales
        return false;
    }
    var user = _users2.default.findOne({ 'email': email }).then(function (user) {

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
                    console.log(token, '<<<<<');
                    resolve(token);
                } else {
                    reject(false);
                }
            });
        });
        console.log(compare, '<<<<<C');

        return compare;
    }).catch(function (err) {
        return console.log(err);
    });

    return user;
};
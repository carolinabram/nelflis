'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;
var SALT_WORK_FACTOR = 10;

var UserSchema = new Schema({

    'name': {
        type: String,
        require: true
    },
    'lastName': {
        type: String

    },
    'email': {
        type: String,
        require: true
    },
    'password': {
        type: String,
        require: true
    },
    'phone': {
        type: Number
    },
    'status': {
        type: String

    },
    'avatar': {
        type: String,
        require: true
    },
    'birthDate': {
        type: Date

    }

}, { collection: 'users', timestamps: true });

//antes de realizar el evento save se hashea la password
UserSchema.pre('save', function (next) {
    var user = this;

    //solo se hashearan las contraseñas que han sido modificadas
    if (!user.isModified('password')) return next();

    _bcrypt2.default.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        //hasheo
        _bcrypt2.default.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);

            user.password = hash;
            next();
        });
    });
});

exports.default = _mongoose2.default.model('users', UserSchema);
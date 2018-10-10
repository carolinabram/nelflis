'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _users = require('./users');

var _users2 = _interopRequireDefault(_users);

var _categories = require('./categories');

var _categories2 = _interopRequireDefault(_categories);

var _ratings = require('./ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _movies = require('./movies');

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _users2.default, _categories2.default, _ratings2.default, _movies2.default);
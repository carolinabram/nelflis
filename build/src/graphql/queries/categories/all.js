'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _categories = require('../../../schemas/categories');

var _categories2 = _interopRequireDefault(_categories);

var _categories3 = require('../../types/categories');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var queryAllCategories = {
    type: new GRAPHQL.GraphQLList(_categories3.CategoryType),
    resolve: function resolve() {
        var categories = _categories2.default.find().exec();
        if (!categories) throw new Error("Error at fetching categories");
        return categories;
    }
};

exports.default = queryAllCategories;
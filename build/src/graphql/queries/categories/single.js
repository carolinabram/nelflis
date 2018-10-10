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

var querySingleCategory = {

    type: _categories3.CategoryType,
    args: {
        id: {
            name: 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var category = _categories2.default.findById(params.id).exec();
        return category;
    }
};

exports.default = querySingleCategory;
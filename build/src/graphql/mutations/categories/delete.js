'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _categories = require('../../../schemas/categories');

var _categories2 = _interopRequireDefault(_categories);

var _categories3 = require('../../types/categories');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _categories3.CategoryType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedCategory = _categories2.default.findByIdAndRemove(params.id).exec();
        if (!deletedCategory) throw Error("Error on delete");
        return deletedCategory;
    }
};
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CategoryInputType = exports.CategoryType = undefined;

var _graphql = require("graphql");

var GRAPHQL = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var CategoryType = exports.CategoryType = new GRAPHQL.GraphQLObjectType({
    name: "Categories",
    description: "Types of Genres",
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            name: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});

var CategoryInputType = exports.CategoryInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addCategories',
    description: "Add Category",
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            description: {
                type: GRAPHQL.GraphQLString
            }
        };
    }
});
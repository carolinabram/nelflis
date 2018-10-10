'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var GRAPHQL = _interopRequireWildcard(_graphql);

var _categories = require('./categories');

var _ratings = require('./ratings');

var _categories2 = require('../../schemas/categories');

var _categories3 = _interopRequireDefault(_categories2);

var _ratings2 = require('../../schemas/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MovieType = exports.MovieType = new GRAPHQL.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of Movies',
    fields: function fields() {
        return {
            _id: {
                type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
            },
            name: {
                type: GRAPHQL.GraphQLString
            },
            year: {
                type: GRAPHQL.GraphQLString
            },
            director: {
                type: GRAPHQL.GraphQLString
            },
            rank: {
                type: GRAPHQL.GraphQLFloat
            },
            plot: {
                type: GRAPHQL.GraphQLString
            },
            cast: {
                type: GRAPHQL.GraphQLString
            },
            length: {
                type: GRAPHQL.GraphQLString
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            url: {
                type: GRAPHQL.GraphQLString
            },
            rating: {
                type: _ratings.RatingType,
                resolve: function resolve(movie) {
                    var rating = movie.rating;

                    return _ratings3.default.findById(rating).exec();
                }
            },
            category: {
                type: _categories.CategoryType,
                resolve: function resolve(movie) {
                    var category = movie.category;

                    return _categories3.default.findById(category).exec();
                }
            }

        };
    }
});
var MovieInputType = exports.MovieInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddMovies',
    description: 'Types of Movies',
    fields: function fields() {
        return {
            name: {
                type: GRAPHQL.GraphQLString
            },
            year: {
                type: GRAPHQL.GraphQLString
            },
            director: {
                type: GRAPHQL.GraphQLString
            },
            rank: {
                type: GRAPHQL.GraphQLFloat
            },
            plot: {
                type: GRAPHQL.GraphQLString
            },
            cast: {
                type: GRAPHQL.GraphQLString
            },
            length: {
                type: GRAPHQL.GraphQLString
            },
            image: {
                type: GRAPHQL.GraphQLString
            },
            url: {
                type: GRAPHQL.GraphQLString
            },
            rating: {
                type: GRAPHQL.GraphQLString
            },
            category: {
                type: GRAPHQL.GraphQLString
            }

        };
    }
});
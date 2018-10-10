import * as GRAPHQL from 'graphql';

import { CategoryType } from './categories';
import { RatingType } from './ratings';

import Category from '../../schemas/categories';
import Rating from '../../schemas/ratings';

export const MovieType = new GRAPHQL.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of Movies',
    fields : () => ({
        _id:{
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name : {
            type : GRAPHQL.GraphQLString
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
        plot : {
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
            type: RatingType,
            resolve(movie){
                const {rating} = movie
                return Rating.findById(rating).exec()
            }
        },
        category: {
            type: CategoryType,
            resolve(movie){
                const {category} = movie
                return Category.findById(category).exec()
            }
        }

        
    })
})
export const MovieInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'AddMovies',
    description: 'Types of Movies',
    fields : () => ({
        name : {
            type : GRAPHQL.GraphQLString
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
        plot : {
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

        
    })
})

import * as GRAPHQL from 'graphql';

export const RatingType = new GRAPHQL.GraphQLObjectType({
    name: "Rating",
    description : "Types of Genres",
    fields : () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})

export const RatingInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addRating',
    description: "Add Rating",
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})
import * as GRAPHQL from 'graphql';

export const CategoryType = new GRAPHQL.GraphQLObjectType({
    name: "Categories",
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

export const CategoryInputType = new GRAPHQL.GraphQLInputObjectType({
    name: 'addCategories',
    description: "Add Category",
    fields : () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        description: {
            type: GRAPHQL.GraphQLString
        }
    })
})
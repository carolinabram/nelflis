import * as GRAPHQL from 'graphql';


export const UserType = new GRAPHQL.GraphQLObjectType({
    name:"Users",
    description : "Users in database",
    fields: () => ({
        _id: {
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        name: {
            type: GRAPHQL.GraphQLString,
            description: "Name of the user"
        },
        lastName : {
            type : GRAPHQL.GraphQLString
        },
        email : {
            type: GRAPHQL.GraphQLString
        },
        password : {
            type : GRAPHQL.GraphQLString
        },
        phone : {
            type: GRAPHQL.GraphQLString
        },
        status : {
            type: GRAPHQL.GraphQLString
        },
        avatar : {
            type: GRAPHQL.GraphQLString
        },
        birthDate : {
            type: GRAPHQL.GraphQLString
        }

    })

})

export const UserInputType = new GRAPHQL.GraphQLInputObjectType({
    name : 'AddUsers',
    description: 'Input Type of User',
    fields: () => ({
        name: {
            type: GRAPHQL.GraphQLString
        },
        lastName : {
            type : GRAPHQL.GraphQLString
        },
        email : {
            type: GRAPHQL.GraphQLString
        },
        password : {
            type : GRAPHQL.GraphQLString
        },
        phone : {
            type: GRAPHQL.GraphQLString
        },
        status : {
            type: GRAPHQL.GraphQLString
        },
        avatar : {
            type: GRAPHQL.GraphQLString
        },
        birthDate : {
            type: GRAPHQL.GraphQLString
        }
    })
})
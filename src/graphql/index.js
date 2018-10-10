import * as GRAPHQL from 'graphql';

import queries from './queries';
import mutations from './mutations';


export default new GRAPHQL.GraphQLSchema({

    query: new GRAPHQL.GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation : new GRAPHQL.GraphQLObjectType({
        name : 'Mutation',
        fields : mutations
    })
})


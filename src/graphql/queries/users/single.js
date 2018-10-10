import * as GRAPHQL from 'graphql';

import User from '../../../schemas/users';

import { UserType } from '../../types/users';

const querySingleUser = {

    type: UserType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const user = User.findById(params.id).exec()
        return user
    }
}

export default querySingleUser;
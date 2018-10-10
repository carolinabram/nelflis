import User from '../../../schemas/users';
import { UserInputType, UserType } from '../../types/users';
import * as GRAPHQL from 'graphql';

export default {

    type: UserType,
    args:{ 
        id:{
            name: 'userID',
            type: new GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        },
        data:{
            name: 'data',
            type: new GRAPHQL.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        return User.findByIdAndUpdate(params.id, {$set:{...params.data}})
            .then((user)=> User.findById(user.id).exec())
            .catch((err)=> new Error('Error at update', err))
    }
}


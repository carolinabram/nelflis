import User from '../../../schemas/users';
import { UserInputType, UserType } from '../../types/users';
import * as GRAPHQL from 'graphql';

export default {

    type: UserType,
    args: {
        data: {
            name: 'data',
            type: new GRAPHQL.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        const user = new User(params.data)
        const newUser = user.save();
        if(!newUser) throw new Error("Error at creating User")
        return newUser
    }
}
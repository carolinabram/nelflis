import * as GRAPHQL from 'graphql';

import User from '../../../schemas/users';
import { UserType } from '../../types/users';


const queryAllUsers = {
    type : new GRAPHQL.GraphQLList(UserType),
    resolve(){
        const users = User.find().exec()
        if(!users) throw new Error("Error at fetching users");
        return users
    }
}

export default queryAllUsers;
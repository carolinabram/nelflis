import User from '../../../schemas/users';
import { UserType }  from '../../types/users';
import * as GRAPHQL from 'graphql';

export default{

    type: UserType,
    args:{
        id:{
            name: 'userID',
            type: new GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedUser = User.findByIdAndDelete(params.id).exec()
        if(!deletedUser) throw Error("Error on Delete")
        return deletedUser
    }
}


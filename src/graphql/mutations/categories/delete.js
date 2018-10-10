import Category from '../../../schemas/categories';
import { CategoryType } from '../../types/categories';
import * as graphql from 'graphql';

export default {
    type: CategoryType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedCategory = Category.findByIdAndRemove(params.id).exec()
        if(!deletedCategory) throw Error("Error on delete")
        return deletedCategory
    }
}
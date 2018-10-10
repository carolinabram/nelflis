import Category from '../../../schemas/categories';
import { CategoryType, CategoryInputType } from '../../types/categories';
import * as graphql from 'graphql';

export default{
    type: CategoryType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(CategoryInputType)
        }
    },
    resolve(root,params){
        return Category.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((category)=> Category.findById(category.id).exec())
                        .catch((err) => new Error('Couldnt update Genre data', err))
    }
}




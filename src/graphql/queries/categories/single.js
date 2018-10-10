import * as GRAPHQL from 'graphql';

import Category from '../../../schemas/categories';

import { CategoryType } from '../../types/categories';

const querySingleCategory = {

    type: CategoryType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const category = Category.findById(params.id).exec()
        return category
    }
}

export default querySingleCategory;
import * as GRAPHQL from 'graphql';

import Category from '../../../schemas/categories';
import { CategoryType } from '../../types/categories';


const queryAllCategories = {
    type : new GRAPHQL.GraphQLList(CategoryType),
    resolve(){
        const categories = Category.find().exec()
        if(!categories) throw new Error("Error at fetching categories");
        return categories
    }
}

export default queryAllCategories;
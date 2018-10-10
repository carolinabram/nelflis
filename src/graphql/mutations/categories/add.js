import Category from '../../../schemas/categories';
import { CategoryType ,CategoryInputType } from '../../types/categories';
import * as graphql from 'graphql';

export default {

    type:CategoryType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(CategoryInputType)
        }
    },
    resolve(root,params){
        const category = new Category(params.data)
        const newCategory = category.save();
        if(!newCategory) throw new Error("Error at creating category")
        return newCategory
    }
}
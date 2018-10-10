import {
    GraphQLNonNull,
    GraphQLID
} from 'graphql';

import { RatingType, RatingInputType } from '../../types/ratings';
import RatingSchema  from '../../../schemas/ratings';

export default {

    type: RatingType,
    args: {
        id: {
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        }
    },
    resolve(root, params) {
        const removedRating = RatingSchema.findOneAndRemove(params.id).exec()
        if(!removedRating){
            throw new Error ('Error removing rating');
        }
        return removedRating;
    }


}
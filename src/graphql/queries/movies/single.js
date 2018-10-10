import * as GRAPHQL from 'graphql';

import Movie from '../../../schemas/movies';

import { MovieType } from '../../types/movies';

const querySingleMovie = {

    type: MovieType,
    args: {
        id:{
            name : 'ID',
            type: GRAPHQL.GraphQLNonNull(GRAPHQL.GraphQLID)
        }
    },
    resolve(root,params){
        const movie = Movie.findById(params.id).exec()
        return movie
    }
}

export default querySingleMovie;
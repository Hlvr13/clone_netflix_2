import * as graphql from 'graphql';
import Movie from '../../../schemas/movie';
import { MovieType, MovieInputType } from '../../types/movie';

export default{
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        return Movie.findByIdAndUpdate(params.id,{$set:{...params.data}})
                    .then((movie) => Movie.findById(movie.id).exec())
                    .catch((err) => new Error('Could not update Movie Data.', err))
    }
}
import * as graphql from 'graphql';
import { MovieType } from '../../types/movie';
import Movie from '../../../schemas/movie';

export default{
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteMovie = Movie.findByIdAndRemove(params.id).exec();
        if(!deleteMovie) throw Error('Error on delete.')
        return deleteMovie;
    }
}
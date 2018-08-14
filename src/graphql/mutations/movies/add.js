import * as graphql from 'graphql';
import Movie from '../../../schemas/movie';
import { MovieType, MovieInputType } from '../../types/movie';

export default{
    type: MovieType,
    args: {
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root,params){
        const movie = new Movie(params.data)
        const newMovie = movie.save();
        if(!newMovie) throw new Error('Error at creating Movie.')
        return newMovie;
    }
}
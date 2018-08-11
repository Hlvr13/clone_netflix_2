import * as graphql from 'graphql';
import Movie from '../../../schemas/movie';
import { MovieType } from '../../types/movie';

const querySingleMovie = {
    type: MovieType,
    args: {
        id: {
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const movie = Movie.findById(params.id).exec();
        return movie;
    }
}

export default querySingleMovie;
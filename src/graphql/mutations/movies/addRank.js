import * as graphql from 'graphql';
import Movie from '../../../schemas/movie';
import { MovieType, RankMovieType } from '../../types/movie';

export default{
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name:'data',
            type: graphql.GraphQLNonNull(RankMovieType)
        }
    }, resolve(root,params){
        const {id,data} = params;
        return Movie.findByIdAndUpdate(id,{$push:{rank:data.rank}})
        .then((movie) => {
            return Movie.findById(movie.id).exec();
        })
    }
}
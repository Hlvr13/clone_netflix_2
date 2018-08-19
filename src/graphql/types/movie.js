import * as graphql from 'graphql';
import { GenreType } from './genre';
import Genre from '../../schemas/genre';
import { RatingType } from './rating';
import  Rating from '../../schemas/rating';

export const MovieType = new graphql.GraphQLObjectType({
    name: 'Movies',
    description: 'Types of movies',
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        image: {
            type: graphql.GraphQLString
        },
        name: {
            type: graphql.GraphQLString
        },
        genre: {
            type: GenreType,
            resolve(movie){
                const { genre } = movie
                return Genre.findById(genre).exec();
            }
        },
        synopsis: {
            type: graphql.GraphQLString
        },
        cast: {
            type: graphql.GraphQLString
        },
        year: {
            type: graphql.GraphQLString
        },
        rank: {
            type: graphql.GraphQLList(graphql.GraphQLFloat)
        },
        length: {
            type: graphql.GraphQLString
        },
        rating: {
            type: RatingType,
            resolve(movie){
                const { rating } = movie
                return Rating.findById(rating).exec();
            }
        },
        url: {
            type: graphql.GraphQLString
        }
    })
})

export const MovieInputType = new graphql.GraphQLInputObjectType({
    name: 'Add_Movies',
    description: 'Types of Add movies',
    fields: () => ({
        image: {
            type: graphql.GraphQLString
        },
        name: {
            type: graphql.GraphQLString
        },
        genre: {
            type: graphql.GraphQLString
        },
        synopsis: {
            type: graphql.GraphQLString
        },
        cast: {
            type: graphql.GraphQLString
        },
        year: {
            type: graphql.GraphQLString
        },
        length: {
            type: graphql.GraphQLString
        },
        rating: {
            type: graphql.GraphQLString
        },
        url: {
            type: graphql.GraphQLString
        }
    })
})

export const RankMovieType = new graphql.GraphQLInputObjectType({
    name: "addRank",
    description: "Add rank to movie",
    fields:()=>({
        rank:{
            type:graphql.GraphQLFloat
        }
    })
})
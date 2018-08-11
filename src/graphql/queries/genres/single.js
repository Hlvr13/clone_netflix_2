import * as graphql from 'graphql';
import Genre from '../../../schemas/genre';
import { GenreType } from '../../types/genre';

const querySingleGenre = {
    type: GenreType,
    args: {
        id:{
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const genre = Genre.findById(params.id).exec();
        return genre;
    }
}

export default querySingleGenre;
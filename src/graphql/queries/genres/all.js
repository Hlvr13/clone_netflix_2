import * as graphql from 'graphql';
import Genre from '../../../schemas/genre';
import { GenreType } from '../../types/genre';

const queryAllGenres = {
    type: new graphql.GraphQLList(GenreType),
    resolve(){
        const genres = Genre.find().exec();
        if(!genres) throw new Error('Error at fetching genres.');
        return genres;
    }
}

export default queryAllGenres;
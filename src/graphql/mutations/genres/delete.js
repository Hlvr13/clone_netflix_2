import Genre from '../../../schemas/genre';
import { GenreType } from '../../types/genre';
import * as graphql from 'graphql';

export default {
    type: GenreType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deletedGenre = Genre.findByIdAndRemove(params.id).exec();
        if(!deletedGenre) throw Error('Error on delete.')
        return deletedGenre
    }
}
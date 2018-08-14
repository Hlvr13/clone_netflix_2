import * as graphql from 'graphql';
import Genre from '../../../schemas/genre';
import { GenreType, GenreInputType } from '../../types/genre';

export default{
    type: GenreType,
    args: {
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(GenreInputType)
        }
    },
    resolve(root,params){
        return Genre.findByIdAndUpdate(params.id,{$set:{...params.data}})
                        .then((genre)=> Genre.findById(genre.id).exec())
                        .catch((err)=> new Error('Could not update Genre Data', err))
    }
}

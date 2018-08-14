import * as grapgql from 'graphql';
import Rating from '../../../schemas/rating';
import { RatingType } from '../../types/rating';

export default{
    type: RatingType,
    args:{
        id:{
            name: 'ID',
            type: new grapgql.GraphQLNonNull(grapgql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteRating = Rating.findByIdAndRemove(params.id).exec();
        if(!deleteRating) throw Error('Error on delete.')
        return deleteRating;
    }
}
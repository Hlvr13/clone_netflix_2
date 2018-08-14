import * as graphql from 'graphql';
import Rating from '../../../schemas/rating';
import { RatingType, RatingInputType } from '../../types/rating';

export default{
    type: RatingType,
    args:{
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        const rating = new Rating(params.data)
        const newRating = rating.save();
        if(!newRating) throw new Error('Error at creaing rating.')
        return newRating;
    }
}
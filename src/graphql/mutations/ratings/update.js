import * as graphql from 'graphql';
import Rating from '../../../schemas/rating';
import { RatingType, RatingInputType } from '../../types/rating';

export default{
    type: RatingType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(RatingInputType)
        }
    },
    resolve(root,params){
        return Rating.findByIdAndUpdate(params.id,{$set:{...params.data}})
                    .then((rating) => Rating.findById(rating.id).exec())
                    .catch((err) => new Error('Could not update Rating Data.',err))
    }
}
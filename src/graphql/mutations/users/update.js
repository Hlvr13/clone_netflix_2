import * as graphql from 'graphql';
import User from '../../../schemas/user';
import { UserType, UserInputType } from '../../types/user';

export default{
    type: UserType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name: 'data',
            type: new graphql.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        return User.findByIdAndUpdate(params.id,{$set:{...params.data}})
                    .then((user)=> User.findById(user.id).exec())
                    .catch((err)=> new Error('Could not update User Data',err))
    }
}

import * as graphql from 'graphql';
import User from '../../../schemas/user';
import { UserType, UserInputType } from '../../types/user';

export default{
    type: UserType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(UserInputType)
        }
    },
    resolve(root,params){
        const user = new User(params.data)
        const newUser = user.save();
        if(!newUser) throw new Error('Error at creating User.')
        return newUser;
    }
}
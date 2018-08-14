import * as graphql from 'graphql';
import User from '../../../schemas/user';
import { UserType } from '../../types/user';

export default{
    type: UserType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root,params){
        const deleteUser = User.findByIdAndRemove(params.id);
        if(!deleteUser) throw Error('Error on delate.')
        return deleteUser;
    }
}
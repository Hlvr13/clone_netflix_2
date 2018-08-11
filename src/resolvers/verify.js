import User from '../schemas/user';
import jwt from 'jsonwebtoken';

const secret = 'secretpassword' // secret key
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ');

    let user = null
    if(!payload){
        throw new Error('No token provided.') // No token in Header
    }
    
    if( prefix !== prefixToken){
        throw new Error('Invalid Header format.')
    }

    jwt.verify(payload,secret,(err,data) => {
        if(err){
            throw new Error('Invalid Token.')
        }else{
            user = User.findOne({'_id':data.id}).exec().then(res =>{
                return resolve(res);
            })
            .catch(err => {
                return reject(err)
            })
        }
    })

    if(!user){
        throw new Error('User does not exist in MongoDB.')
    }
}

/*
export const verifyToken = async (token) => {
    return new Promise((resolve , reject) => {
        const [prefix, payload] = token.split(' ');

        if(!payload) return reject('No token provided.');
        if(prefix !== prefixToken ) return reject('Invalid header format.');

        jwt.verify(payload,secret, (err,data) => {
            if(err){
                return reject(err);
            }

            User.findOne({'_id': data.id}).exec().then(res => {
                return resolve(res);
            })
            .catch(err => {
                return reject(err);
            })

        })
    })
}*/
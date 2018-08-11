import jwt from 'jsonwebtoken';
import User from '../schemas/user';
import bcrypt from 'bcrypt';

const expiresIn = '1d' //tiempo de expiracion
const secret = 'secretpassword' // secret key


export const createToken = (email,password) => {
    if(!email  || !password){    //verificar existencia de credenciales "password" e "email"
        return false;
    }

    const user = User.findOne({'email':email}).then((user) => {
        const compare = new Promise ((resolve, reject) => {
            bcrypt.compare(password, user.password, function(err,res){
                if(res){
                    const payload = {
                        email: user.email,
                        id: user._id
                    }

                    const token = jwt.sign(payload,secret,{
                        expiresIn
                    })

                    resolve(token)
                }

                else{
                    reject(false)
                }
            })
        })
        return compare;
    }).catch()
    return user;
}
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const salt_factor = 10;

const Schema = mongoose.Schema;

const userSchema = new Schema({
    'firstName':{
        type: String,
        required: true
    },
    'lastName':{
        type: String,
        required: true
    },
    'email':{
        type: String,
        required: true
    },
    'password':{
        type: String,
        required:true
    },
    'phone':{
        type: String,
        required: true
    },
    'isPremium':{
        type : Boolean,
        default: false,
        required: false
    }
},{'collections':'users',timestamps:true});

//realiza esto ANTES del save, llamado en index.js//
userSchema.pre('save',function(next){
    var user = this;
//Solo si el usuario modifica 
    if(!user.isModified('password')) return next();

    //generamos salt//
    bcrypt.genSalt(salt_factor,function(err,salt){
        if(err) throw next(err);

        //mandamos la passwor al metodo hash bcrypt//
        bcrypt.hash(user.password, salt, function(err,hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
})

export default mongoose.model('users',userSchema);
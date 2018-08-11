import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

const movieScheme = new Scheme({
    'image':{
        type: String,
        required: true
    },
    'name':{
        type: String,
        required: true
    },
    'genre':{
        type: Scheme.Types.ObjectId,
        ref: 'genres',
    },
    'synopsis':{
        type: String,
        required: true
    },
    'cast':{
        type: String,
        required: true
    },
    'year':{
        type: String,
        required: true
    },
    'rank':{
        type: String,
        required: true
    },
    'length':{
        type: String,
        required: true
    },
    'rating':{
        type: Scheme.Types.ObjectId,
        ref: 'ratings',
    },
    'url':{
        type: String,
        required: true
    }
},{'collections':'movies',timestamps: true});

export default mongoose.model('movies',movieScheme);

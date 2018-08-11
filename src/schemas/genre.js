import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

const genreScheme = new Scheme({
    'name':{
        type: String,
        required: true
    },
    'description':{
        type: String,
        required: true
    }
},{'collections':'genres', timestamps: true});

export default mongoose.model('genres',genreScheme);
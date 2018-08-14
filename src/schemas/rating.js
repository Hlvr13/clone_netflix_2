import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

const ratingSchema = new Scheme({
    'name':{
        type: String,
        required: true
    },

    'description':{
        type : String,
        required: true
    },
    'age':{
        type: String,
        required: true
    }

},{'collection':'ratings',timestamps: true});

export default mongoose.model('ratings',ratingSchema);


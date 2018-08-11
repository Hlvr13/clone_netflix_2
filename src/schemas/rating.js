import mongoose from 'mongoose';

const Scheme = mongoose.Schema;

const ratingSchema = new Scheme({
    'name':{
        type: Scheme.Types.ObjectId,
        required: true
    },

    'description':{
        type : Scheme.Types.ObjectId,
        required: true
    },
    'age':{
        type: Number,
        required: true
    }

},{'collection':'ratings',timestamps: true});

export default mongoose.model('ratings',ratingSchema);


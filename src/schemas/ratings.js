import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const RatingsSchema = new Schema({
    'name' : {
        type: String,
        require: true
    },
    'description': {
        type: String,
        require: true
    }
},{collection: 'ratings', timestamps: true});

export default mongoose.model('ratings', RatingsSchema);
import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;


const CategoriesSchema = new Schema({
    'name' : {
        type: String,
        require: true
    },
    'description': {
        type: String
    }
},{collection: 'categories', timestamps: true});

export default mongoose.model('categories', CategoriesSchema);
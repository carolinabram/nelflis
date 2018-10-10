import mongoose, { mongo } from 'mongoose';
import bcrypt from 'bcrypt';


const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const UserSchema = new Schema({

    'name' : {
        type: String,
        require: true
    },
    'lastName': {
        type: String,
        
    },
    'email': {
        type: String,
        require: true
    },
    'password': {
        type: String,
        require: true
    },
    'phone': {
        type: Number
    },
    'status': {
        type: String,
        
    },
    'avatar': {
        type: String,
        require: true
    },
    'birthDate': {
        type: Date,
        
    },
    
    
},{collection: 'users', timestamps: true});


//antes de realizar el evento save se hashea la password
UserSchema.pre('save', function(next){
    var user = this;

    //solo se hashearan las contraseñas que han sido modificadas
    if(!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        //hasheo
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })
})


export default mongoose.model('users', UserSchema);
import jwt from 'jsonwebtoken';
import User from '../schemas/users';
import bcrypt from 'bcrypt';
const expiresIn = '1d' //time to live
const secret = 'esUnSecreto' //secret key

export const createToken = (email, password) => {
    if(!email || !password ) { //si fallan las credenciales
        return false
    }
    const user = User.findOne({'email': email}).then((user) => {

        const compare = new Promise((resolve,reject) =>{
            bcrypt.compare(password, user.password, function(err, res){
                if(res){
                    const payload ={
                        email: user.email,
                        id: user._id
                    }
                    const token = jwt.sign(payload, secret, {
                        expiresIn
                    })
                    console.log(token,'<<<<<')
                    resolve(token)
                }
                else{
                    reject(false)
                }
            })
        })
        console.log(compare,'<<<<<C')

        return compare;

    }).catch((err)=>console.log(err))

    return user
}
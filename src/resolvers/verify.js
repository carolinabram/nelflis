import User from '../schemas/users';
import jwt from 'jsonwebtoken';

const secret = 'esUnSecreto';
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ');
    console.log(token);
    console.log(payload,'<<PAYLOAD');
    let user = null;
    if(!payload){
        throw new Error('No Token Provided')
    }
    if(prefix !== prefixToken){ //no header o invalido
        throw new Error('Invalid Header Format')
    }
    jwt.verify(payload,secret, (err,data)=>{
        if(err){
            throw new Error('Invalid TOKEN')
        }else{
            console.log(data.id,'<<<<DATAAA');
            user = User.findOne({'_id':data.id}).exec()
                .then(res=>{
                    return resolve(res);
                })
                .catch(err=>{
                    return reject(err);
                })
                console.log(user,'<<USER')
        }
    })
    if(!user){
        throw new Error('User not in Database');
    }

}
import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const authSchema = new Schema({
    email :{type:String, required:true},
    password :{type:String, required:true}    
    }, {timestamps:true}
);

const auth= mongoose.model('Auth', authSchema);

export default auth;
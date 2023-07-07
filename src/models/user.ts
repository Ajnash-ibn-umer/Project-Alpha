import { Schema, model } from "mongoose"
const passportLocalMongoose = require('passport-local-mongoose');
//add log as object
const user = new Schema({

    // personal information
    fullName: { type: String, required: true, minlength: 3, maxlength: 30 },
    // @ts-ignore
    username: { type: String, index: true, unique: [true,"This user already exist"], sparse: true, required: true, minlength: 3, maxlength: 30 },
    profileImg: { type: String },
    // @ts-ignore
    email: { type: String, unique:[true,"This user already exist"], index: true, required: true },
    password: { type: String, required: true, minlength: 8 },
    mobile: { type: String, index: true, unique: true, sparse: true },
    joined:{type:Date,default:Date.now()},
    
})

// user.plugin(passportLocalMongoose);
export const userSchema = model('user', user) 
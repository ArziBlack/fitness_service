import mongoose, { Schema } from "mongoose";

const authSchema: mongoose.Schema = new Schema({
    isAdmin: { type: Boolean, default: false },
    email: { type: String, unique: true },
    userName: { type: String, },
    password: { type: String },
    age:{type: String},
    height: {type: Number},
    weight: {type: Number},
    gender: {type: String},
    goals: {type: Array}
}, { timestamps: true });

export const Auth = mongoose.model('Auth', authSchema);
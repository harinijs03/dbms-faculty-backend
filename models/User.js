import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema({
    oracleUsername: { type: String, required: true },
    oraclePassword: { type: String, required: true }
});
export const User = mongoose.model('User', userSchema);
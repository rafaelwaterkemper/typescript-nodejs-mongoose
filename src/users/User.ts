import {Schema, model, Document} from 'mongoose'

interface UserModel extends Document {
    name?: string,
    idade?: number,
    dataNascimento?: Date
}

const UserSchema = new Schema({
    name: String,
    idade: Number,
    dataNascimento: Date
},
{
    timestamps: true
})

export default model<UserModel>('User', UserSchema)

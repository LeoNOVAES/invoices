import { User } from './interface';
import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';

interface IUser {
    _id?: string,
    name: string,
    email: string,
    password: string,
    checkPassword: (password: string) => boolean;
}

const schema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
}, {
    timestamps: true
});

schema.set('toJSON', {
    transform: function(doc, ret, opt) {
        delete ret['password']
        return ret
    }
})

schema.pre('save', function (next) {
    const salt = bcrypt.genSaltSync();
    this.password = bcrypt.hashSync(this.password, salt);
    next();
});

schema.methods.checkPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

export const UserModel = model<IUser>("User", schema);

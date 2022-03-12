import jwt from "jsonwebtoken";

import { UserModel } from '../../domain/user/model';
import AlreadyExists  from '../../commons/errors/alreadyExists'
import Repository from './repository';
import { User } from '../../domain/user/interface';
import NotAuthorized from '../../commons/errors/notAuthorized';

class UserRepository extends Repository{
    constructor(model) {
        super(model);
    }

    async save (data: User): Promise<User> {
        const { email } = data;
        const exists = await this.find(null, email);

        if (exists) throw new AlreadyExists('already exists');

        return await new UserModel(data).save();
    }

    async updateUser(id, data): Promise<any>  {
        return await UserModel.findByIdAndUpdate(id, data);
    }

    async signIn (data: User): Promise<string> {
        const { email, password } = data;
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new NotAuthorized('user not authorized!');
        }

        if (!user.checkPassword(password)) {
            throw new NotAuthorized('user not authorized!');
        }

        return jwt.sign({ 'id': user.id, 'email': user.email }, 'secret', {
            expiresIn: 86400
        });
    }

    async find(id: string | null, email: string | null): Promise<User> {
        return await UserModel.findOne()
        .or([
            { email },
            { _id: id },
        ]) as User;
    }
}

export default new UserRepository(UserModel);

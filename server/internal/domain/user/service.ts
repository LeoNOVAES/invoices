import UserRepository from '../../infra/repository/userRepository';
import { User } from './interface';

class UserService {
    async create (data: User): Promise<User> {
        return await UserRepository.save(data);
    }

    async update (id: string, data: User): Promise<User> {
        return await UserRepository.updateUser(id, data);
    }

    async index (id: string): Promise<User> {
        return await UserRepository.find(id, null);
    }

    async indexAll (): Promise<User[]> {
        return await UserRepository.findAll();
    }

    async signIn (data: User): Promise<string> {
        return await UserRepository.signIn(data);
    } 

    async delete (id: string): Promise<void> {
        return await UserRepository.delete(id);
    }
}

export default new UserService();

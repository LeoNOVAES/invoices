import CategoryRepository from '../../infra/repository/categoryRepository';
import { Category } from './interface';

class CategoryService {
    async create (data: Category): Promise<Category> {
        return await CategoryRepository.save(data);
    }

    async update (id, data: Category): Promise<Category> {
        return await CategoryRepository.update(id, data);
    }

    async index (id: string, name: string ): Promise<Category> {
        return await CategoryRepository.find(id, name);
    }

    async indexAll (): Promise<Category[]> {
        return await CategoryRepository.findAll();
    }

    async delete (id: string): Promise<void> {
        return await CategoryRepository.delete(id);
    }
}

export default new CategoryService();

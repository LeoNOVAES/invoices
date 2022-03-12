import ExpensesRepository from '../../infra/repository/expensesRepository';
import { Expenses } from './interface';

class ExpensesService {
    async create (data: Expenses): Promise<Expenses> {
        return await ExpensesRepository.save(data);
    }

    async update (id: string, data: Expenses): Promise<Expenses> {
        return await ExpensesRepository.updateExpenses(id, data);
    }

    async index (id: string, number: string ): Promise<Expenses> {
        return await ExpensesRepository.findExpenses(id, number);
    }

    async indexAll (owner: string): Promise<Expenses[]> {
        return await ExpensesRepository.findAllExpenses();
    }

    async delete (id: string): Promise<void> {
        return await ExpensesRepository.deleteExpenses(id);
    }
}

export default new ExpensesService();

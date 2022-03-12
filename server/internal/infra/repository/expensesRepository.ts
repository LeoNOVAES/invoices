import AlreadyExists  from '../../commons/errors/alreadyExists'
import Repository from './repository';
import { ExpensesModel } from '../../domain/expenses/model';
import { Expenses } from '../../domain/expenses/interface';

class ExpensesRepository extends Repository{
    constructor(model) {
        super(model);
    }

    async save (data: Expenses): Promise<Expenses> {
        const { name } = data;
        const exists = await this.findExpenses(null, name);

        if (exists) throw new AlreadyExists('already exists');

        return await new ExpensesModel(data).save();
    }

    async findExpenses(id: string | null, number: string): Promise<Expenses> {
        return await ExpensesModel.findOne()
            .or([
                { number },
                { _id: id },
            ])
            .populate(['company', 'category', 'owner']) as Expenses;
    }

    async findAllExpenses(): Promise<Expenses[]> {
        return await ExpensesModel.find()
            .populate(['company', 'category', 'owner']);
    }

    async updateExpenses (id: string, data: Expenses): Promise<any>  {
        const filter = [{ _id: id }];
        return await ExpensesModel
            .findOneAndUpdate(filter, data);
    }

    async deleteExpenses(id: string): Promise<void> {
        await ExpensesModel.findOneAndDelete({ _id:id });
    }
}

export default new ExpensesRepository(ExpensesModel);

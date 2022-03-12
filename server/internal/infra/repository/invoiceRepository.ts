import { InvoiceModel } from '../../domain/invoice/model';
import { Invoice } from '../../domain/invoice/interface';
import AlreadyExists  from '../../commons/errors/alreadyExists'
import Repository from './repository';

class InvoiceRepository extends Repository{
    constructor(model) {
        super(model);
    }

    async save (data: Invoice): Promise<Invoice> {
        const { number } = data;
        const exists = await this.findInvoices(null, number);

        if (exists) throw new AlreadyExists('already exists');

        return await new InvoiceModel(data).save();
    }

    async findInvoices(id: string | null, number: string): Promise<Invoice> {
        return await InvoiceModel.findOne()
            .or([
                { number },
                { _id: id },
            ])
            .populate(['company', 'category', 'owner']) as Invoice;
    }

    async findAllInvoices(): Promise<Invoice[]> {
        return await InvoiceModel.find()
            .populate(['company', 'category', 'owner']);
    }

    async updateInvoice (id: string, data: Invoice): Promise<any>  {
        const filter = [{ _id: id }];
        return await InvoiceModel
            .findOneAndUpdate(filter, data);
    }

    async deleteInvoice(id: string): Promise<void> {
        await InvoiceModel.findOneAndDelete({ _id:id });
    }
}

export default new InvoiceRepository(InvoiceModel);

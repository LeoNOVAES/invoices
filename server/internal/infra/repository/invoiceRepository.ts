import { InvoiceModel } from '../../domain/invoice/model';
import { Invoice } from '../../domain/invoice/interface';
import AlreadyExists  from '../../commons/errors/alreadyExists'

class InvoiceRepository {
    async save (data: Invoice): Promise<Invoice> {
        const { number } = data;
        const exists = await this.find(null, number);

        if (exists) throw new AlreadyExists('already exists');

        return await new InvoiceModel(data).save();
    }

    async update (data: Invoice): Promise<Invoice>  {
        return await InvoiceModel.findByIdAndUpdate(data._id, data) as Invoice;
    }

    async find(id, number): Promise<Invoice> {
        return await InvoiceModel.findOne()
        .or([
            { number },
            { _id: id },
        ]) as Invoice;
    }

    async findAll(): Promise<Invoice[]> {
        return await InvoiceModel.find().populate(['company', 'category']);
    }

    async delete(id: string): Promise<void> {
        await InvoiceModel.findByIdAndDelete(id);
    }
}

export default new InvoiceRepository();

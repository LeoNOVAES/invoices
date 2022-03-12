import InvoiceRepository from '../../infra/repository/invoiceRepository';
import { Invoice } from './interface';

class InvoiceService {
    async create (data: Invoice): Promise<Invoice> {
        return await InvoiceRepository.save(data);
    }

    async update (id: string, data: Invoice): Promise<Invoice> {
        return await InvoiceRepository.updateInvoice(id, data);
    }

    async index (id: string, number: string ): Promise<Invoice> {
        return await InvoiceRepository.findInvoices(id, number);
    }

    async indexAll (owner: string): Promise<Invoice[]> {
        return await InvoiceRepository.findAllInvoices();
    }

    async delete (id: string): Promise<void> {
        return await InvoiceRepository.deleteInvoice(id);
    }
}

export default new InvoiceService();

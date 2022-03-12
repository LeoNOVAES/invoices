import InvoiceRepository from '../../infra/repository/invoiceRepository';
import { Invoice } from './interface';

class InvoiceService {
    async create (data: Invoice): Promise<Invoice> {
        return await InvoiceRepository.save(data);
    }

    async update (data: Invoice): Promise<Invoice> {
        return await InvoiceRepository.update(data);
    }

    async index (id: string, number: string ): Promise<Invoice> {
        return await InvoiceRepository.find(id, number);
    }

    async indexAll (): Promise<Invoice[]> {
        return await InvoiceRepository.findAll();
    }

    async delete (id: string): Promise<void> {
        return await InvoiceRepository.delete(id);
    }
}

export default new InvoiceService();

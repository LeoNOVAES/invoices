import CompanyRepository from '../../infra/repository/companyRepository';
import { Company } from './interface';

class CompanyService {
    async create (data: Company): Promise<Company> {
        return await CompanyRepository.save(data);
    }

    async update (data: Company): Promise<Company> {
        return await CompanyRepository.update(data);
    }

    async index (id: string, name: string, fiscalNumber: string, corporativeName: string ): Promise<Company> {
        return await CompanyRepository.find(id, name, fiscalNumber, corporativeName);
    }

    async indexAll (): Promise<Company[]> {
        return await CompanyRepository.findAll();
    }

    async delete (id: string): Promise<void> {
        return await CompanyRepository.delete(id);
    }
}

export default new CompanyService();

import CompanyRepository from '../../infra/repository/companyRepository';
import { Company } from './interface';

class CompanyService {
    async create (data: Company): Promise<Company> {
        return await CompanyRepository.save(data);
    }

    async update (id, data: Company): Promise<Company> {
        return await CompanyRepository.update(id, data);
    }

    async index (id: string, name: string, fiscalNumber: string | null, corporativeName: string | null ): Promise<Company> {
        return await CompanyRepository.findCompany(id, name, fiscalNumber, corporativeName);
    }

    async indexAll (): Promise<Company[]> {
        return await CompanyRepository.findAll();
    }

    async delete (id: string): Promise<void> {
        return await CompanyRepository.delete(id);
    }
}

export default new CompanyService;

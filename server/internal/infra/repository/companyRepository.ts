import { CompanyModel } from '../../domain/company/model';
import { Company } from '../../domain/company/interface';
import AlreadyExists  from '../../commons/errors/alreadyExists'

class CompanyRepository {
    async save (data: Company): Promise<Company> {
        const { name, fiscalNumber, corporativeName } = data;
        const exists = await this.find(null, name, fiscalNumber, corporativeName );

        if (exists) throw new AlreadyExists('already exists');

        return await new CompanyModel(data).save();
    }

    async update (data: Company): Promise<Company>  {
        return await CompanyModel.findByIdAndUpdate(data._id, data) as Company;
    }

    async find(id, name, fiscalNumber, corporativeName): Promise<Company> {
        return await CompanyModel.findOne()
        .or([
            { name },
            { fiscalNumber },
            { _id: id },
            { corporativeName },
        ]) as Company;
    }

    async findAll(): Promise<Company[]> {
        return await CompanyModel.find() as Company[];
    }

    async delete(id: string): Promise<void> {
        await CompanyModel.findByIdAndDelete(id);
    }
}

export default new CompanyRepository();

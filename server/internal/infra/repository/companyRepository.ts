import { CompanyModel } from '../../domain/company/model';
import { Company } from '../../domain/company/interface';
import AlreadyExists  from '../../commons/errors/alreadyExists'
import Repository from './repository';

class CompanyRepository extends Repository{
    constructor(model) {
        super(model);
    }

    async save (data: Company): Promise<Company> {
        const { name, fiscalNumber, corporativeName } = data;
        const exists = await this.findCompany(null, name, fiscalNumber, corporativeName );

        if (exists) throw new AlreadyExists('already exists');

        return await new CompanyModel(data).save();
    }

    async findCompany(id, name, fiscalNumber, corporativeName): Promise<Company> {
        return await CompanyModel.findOne()
            .or([
                { name },
                { fiscalNumber },
                { _id: id },
                { corporativeName },
            ]) as Company;
    }
}

export default new CompanyRepository(CompanyModel);

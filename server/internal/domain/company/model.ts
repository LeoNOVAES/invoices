import { Company } from './interface';
import { Schema, model } from 'mongoose';

const schema = new Schema<Company>({
    fiscalNumber: { type: String, required: true },
    name: { type: String, required: true },
    corporativeName: { type: String, required: true }
},
{
    timestamps: true
});

export const CompanySchema = schema;
export const CompanyModel = model<Company>("Company", schema);

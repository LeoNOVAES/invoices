import { Expenses } from './interface';
import { Schema, model } from 'mongoose';

const schema = new Schema<Expenses>({
    value: { type: Number, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    receivedAt: { type: String, required: true },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'Company',
    }
}, {
    timestamps: true
});

export const ExpensesModel = model<Expenses>("Expenses", schema);
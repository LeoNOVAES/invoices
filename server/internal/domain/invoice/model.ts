import { Invoice } from './interface';
import { Schema, model } from 'mongoose';

const schema = new Schema<Invoice>({
    value: { type: Number, required: true },
    number: { type: String, required: true },
    description: { type: String, required: true },
    month: { type: String, required: true },
    receivedAt: { type: String, required: true },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
    },
    company: {
        type: 'ObjectId',
        ref: 'Company',
    },
}, {
    timestamps: true
});

export const InvoiceModel = model<Invoice>("Invoice", schema);
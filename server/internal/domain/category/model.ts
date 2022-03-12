import { Category } from './interface';
import { Schema, model } from 'mongoose';

const schema = new Schema<Category>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    active: { type: Boolean, required: true }
}, {
    timestamps: true
});

export const CategoryModel = model<Category>("Category", schema);

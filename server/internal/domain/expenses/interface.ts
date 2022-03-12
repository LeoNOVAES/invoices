import { Types } from "mongoose";

export interface Expenses {
    _id?: string,
    value: number,
    name: string,
    description: string,
    receivedAt: string,
    paymentAt: string,
    category: Types.ObjectId,
    company: Types.ObjectId,
}
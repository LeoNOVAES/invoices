import { Types } from "mongoose";

export interface Invoice {
    _id?: string,
    value: number,
    number: string,
    description: string,
    month: string,
    receivedAt: string,
    category: Types.ObjectId,
    company: Types.ObjectId,
    owner: Types.ObjectId
}
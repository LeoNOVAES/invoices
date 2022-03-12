import { Types } from "mongoose";
import { Category } from "../category/interface";
import { Company } from "../company/interface";

export interface Invoice {
    _id?: string,
    value: number,
    number: string,
    description: string,
    month: string,
    receivedAt: string,
    category: Types.ObjectId,
    company: Types.ObjectId
}
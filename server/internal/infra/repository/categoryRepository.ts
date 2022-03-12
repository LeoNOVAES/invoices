import AlreadyExists from "../../commons/errors/alreadyExists";
import { Category } from "../../domain/category/interface";
import { CategoryModel } from "../../domain/category/model";

class CategoryController {
    async save (data: Category): Promise<Category> {
        const { name } = data;
        const exists = await this.find(null, name );

        if (exists) throw new AlreadyExists('already exists');

        return await new CategoryModel(data).save();
    }

    async update (data: Category): Promise<Category>  {
        return await CategoryModel.findByIdAndUpdate(data._id, data) as Category;
    }

    async find(id, name): Promise<Category> {
        return await CategoryModel.findOne()
        .or([
            { name },
            { _id: id },
        ]) as Category;
    }

    async findAll(): Promise<Category[]> {
        return await CategoryModel.find() as Category[];
    }

    async delete(id: string): Promise<void> {
        await CategoryModel.findByIdAndDelete(id);
    }
}

export default new CategoryController();

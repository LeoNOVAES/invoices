import AlreadyExists from "../../commons/errors/alreadyExists";
import { Category } from "../../domain/category/interface";
import { CategoryModel } from "../../domain/category/model";
import Repository from "./repository";

class CategoryRepository extends Repository {
    constructor(model) {
        super(model);
    }

    async find(id, name): Promise<Category> {
        return await CategoryModel.findOne()
        .or([
            { name },
            { _id: id },
        ]) as Category;
    }
}

export default new CategoryRepository(CategoryModel);

import AlreadyExists from "../../commons/errors/alreadyExists";

class Repository {
    private model;

    constructor(model) {
        this.model = model;
    }

    async save (data): Promise<any> {
        const { name } = data;
        const exists = await this.find(null, name );

        if (exists) throw new AlreadyExists('already exists');

        return await new this.model(data).save();
    }

    async update (id, data): Promise<any>  {
        return await this.model.findByIdAndUpdate(id, data);
    }

    async find(id: string | null, name: string): Promise<any> {
        return await this.model.findOne()
        .or([
            { name },
            { _id: id },
        ]);
    }

    async findAll(): Promise<any[]> {
        return await this.model.find();
    }

    async delete(id: string): Promise<void> {
        await this.model.findByIdAndDelete(id);
    }
}

export default Repository;

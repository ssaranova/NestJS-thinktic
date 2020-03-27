import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Injectable, Logger } from '@nestjs/common';
import { Libro } from '../interfaces/libro-mongo';

@Injectable()
export class LibroService {

    private readonly logger = new Logger(LibroService.name);
    constructor(@InjectModel('Libro') private readonly bbdd: Model<Libro>) { }

    async list(): Promise<Libro[]> {
        const promise = this.bbdd.find().exec();
        this.logger.log(promise);
        return await promise;
    }

    async add(item: Libro): Promise<Libro> {
        const createItem = new this.bbdd(item);
        return await createItem.save();
    }

    async get(id: string): Promise<Libro> {
        return await this.bbdd.findById(id).exec();
    }

    async update(id: string, item: Libro): Promise<Libro> {
        await this.bbdd.updateOne({ '_id': id }, item);
        return await this.bbdd.findById(id);
    }

    async delete(id: string): Promise<Libro> {
        const item = await this.bbdd.findById(id);
        await this.bbdd.findOneAndRemove({ '_id': id });
        return item;
    }

}

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from '@nestjs/common';
import { Libro } from '../interfaces/libro-mongo';

@Injectable()
export class LibroService {

    constructor(@InjectModel('Libro') private readonly bbdd: Model<Libro>) { }

    async getLibros(): Promise<Libro[]> {
        return await this.bbdd.find().exec();
    }
}

import { Injectable, Logger } from '@nestjs/common';
import { Libro } from '../libro';

@Injectable()
export class RestService {

    private readonly logger = new Logger(RestService.name);
    private libros: Libro[] = [];

    constructor() {
        this.libros = [];
    }

    getLibros(): Libro[] {
        return this.libros;
    }

    addLibro(libro: Libro) {
        this.libros.push(libro);
    }

    getLibro(id: number): Libro {

        let logger = this.logger;
        let response: Libro = new Libro();
        this.getLibros().forEach(function (libro) {
            logger.log('Libro ID --> ' + libro.id);
            if (libro.id == id) {
                response = libro;
            }
        });
        return response;
    }

}

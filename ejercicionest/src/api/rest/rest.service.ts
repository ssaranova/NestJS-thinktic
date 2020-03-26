import { Injectable } from '@nestjs/common';
import { Libro } from '../libro';

@Injectable()
export class RestService {

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
        let response: Libro = new Libro();
        this.getLibros().forEach(function (libro) {
            if (libro.id == id) {
                response = libro;
            }
        });
        return response;
    }

}

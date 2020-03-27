import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
// import { Libro } from '../interfaces/libro';
// import { RestService } from '../../rest/services/rest.service';

import { Libro } from '../interfaces/libro-mongo';
import { LibroService } from '../services/libro.service';

@Controller('libro')
export class LibroController {

    constructor(private readonly service: LibroService) { }

    @Get() // Listado libros
    async findAll(): Promise<Libro[]> {
        return this.service.list();
    }

    @Post() // Crear libro
    async addOne(@Body() item: Libro): Promise<Libro> {
        // Leer datos libro y meterlo en la BBDD
        return this.service.add(item)
    }

    @Get(':id') // Obtener libro
    async getById(@Param('id') id: string): Promise<Libro> {
        // Obtener ID desde la BBDD
        return this.service.get(id);
    }

    @Put(':id') // modificar libro
    modifyById(@Param('id') id: string, @Body() item: Libro): Promise<Libro> {
        // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
        return this.service.update(id, item);
    }

    @Delete(':id') // eliminar libro
    deleteById(@Param('id') id: string): Promise<Libro> {
        // Coger el id consultar a la bbdd y luego borrar el objeto
        return this.service.delete(id);
    }

    /*
    @Get
    findAll(): Libro[] {
        return this.service.getLibros();
    }

    @Post() // Crear libro
    addOne(@Body() libro: Libro): Libro {

        // Leer datos libro y meterlo en la BBDD
        const item = new Libro();
        item.id = this.id;
        item.titulo = libro.titulo;
        item.autor = libro.autor;
        item.fecha = libro.fecha;

        this.service.addLibro(item);
        this.id++;

        return item;
    }

    @Get('/:id') // Obtener libro
    getById(@Param() params): Libro {
        // Obtener ID desde la BBDD
        return this.service.getLibro(params.id);
    }

    @Put('/:id') // modificar libro
    modifyById(@Param() params, @Body() libro: Libro): Libro {

        // Capturar el id y buscarlo en la BBDD y luego guardar los cambios
        const item = new Libro();
        item.id = params.id;
        item.titulo = libro.titulo;
        item.autor = libro.autor;
        item.fecha = libro.fecha;

        return item;
    }

    @Delete('/:id') // eliminar libro
    deleteById(@Param() params): Libro {
        // coger el id consultar a la bbdd y luego borrar el objeto
        const item = new Libro();
        item.id = params.id;
        item.titulo = 'ELIMINADO - Los 3 cerditos';
        item.autor = 'Ni idea';
        item.fecha = '1994';

        return item;
    }
    */

}

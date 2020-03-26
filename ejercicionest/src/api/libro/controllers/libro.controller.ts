import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Libro } from '../interfaces/libro';
import { Service } from '../../rest/services/rest.service';

@Controller('libro')
export class LibroController {

    private id: number = 0;
    constructor(private readonly service: RestService) { }

    @Get() // Listado libros
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

}

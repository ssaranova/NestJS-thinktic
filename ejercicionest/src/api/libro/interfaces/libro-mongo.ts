import { IsString } from 'class-validator';
export class Libro {

    @IsString()
    titulo: string;

    @IsString()
    autor: string;

    @IsString()
    fecha: string;
}

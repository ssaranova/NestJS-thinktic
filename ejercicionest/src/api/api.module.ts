import { Module } from '@nestjs/common';
import { LibroController } from './libro/controllers/libro.controller';
import { RestService } from './rest/services/rest.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro/schemas/libro.schema';
import { LibroService } from './libro/services/libro.service';

@Module({
  controllers: [LibroController],
  providers: [RestService, LibroService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Libro', // The model name
        schema: LibroSchema, // The schema
        collection: 'libros' // The collection name
      }
    ])
  ],
})
export class ApiModule { }

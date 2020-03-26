import { Module } from '@nestjs/common';
import { LibroController } from './libro/controllers/libro.controller';
import { RestService } from './rest/services/rest.service';

import { MongooseModule } from '@nestjs/mongoose';
import { LibroSchema } from './libro/schemas/libro.schema';

@Module({
  controllers: [LibroController],
  providers: [RestService],
  imports: [
    MongooseModule.forFeature([{
      name: 'Libro',
      schema: LibroSchema }]
    )
  ],
})
export class ApiModule {}

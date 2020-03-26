import { Module } from '@nestjs/common';
import { LibroController } from './libro/controllers/libro.controller';
import { RestService } from './rest/services/rest.service';

@Module({
  controllers: [LibroController],
  providers: [RestService]
})
export class ApiModule {}

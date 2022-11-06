import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';

@Module({
  controllers: [ TodoController ], //escucha y emite respuesta
  providers: [ TodoService ] //Lógica de negocio
})
export class TodoModule {}

import { Module } from '@nestjs/common';
import { ProductoModule } from './modules/producto/producto.module';


@Module({
  imports: [ProductoModule], // Importa el módulo de productos

})
export class AppModule {}

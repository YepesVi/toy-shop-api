import { Module } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoController } from './producto.controller';
import { ProductoRepository } from './producto.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [ProductoController],  // Controlador del módulo
  providers: [ProductoService, ProductoRepository, PrismaService], // Servicios y repositorio
  exports: [ProductoService], // Permite que otros módulos accedan al servicio
})
export class ProductoModule {}
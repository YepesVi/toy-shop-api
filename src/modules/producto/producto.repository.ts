import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductoDto } from './DTO/createProducto.dto';
import { UpdateProductoDto } from './DTO/updateProducto.dto';

@Injectable()
export class ProductoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateProductoDto) {
    return this.prisma.producto.create({
      data: {
        ...data,
        createdAt: new Date(), // Se asegura que se registre correctamente
      },
    });
  }

  async findAll() {
    return this.prisma.producto.findMany();
  }

  async findOne(id: string) {
    return this.prisma.producto.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProductoDto) {
    return this.prisma.producto.update({
      where: { id },
      data: {
        ...data,
        updatedAt: new Date(), // Se actualiza manualmente por seguridad
      },
    });
  }

  async delete(id: string) {
    return this.prisma.producto.delete({ where: { id } });
  }
}
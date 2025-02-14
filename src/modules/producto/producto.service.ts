import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductoRepository } from './producto.repository';
import { CreateProductoDto } from './DTO/createProducto.dto';
import { UpdateProductoDto } from './DTO/updateProducto.dto';

@Injectable()
export class ProductoService {
  constructor(private readonly productoRepository: ProductoRepository) {}

  async create(data: CreateProductoDto) {
    return this.productoRepository.create(data);
  }

  
  async findAll() {
    return this.productoRepository.findAll();
  }

  async findOne(id: string) {
    const producto = await this.productoRepository.findOne(id);
    if (!producto) throw new NotFoundException(`Producto con ID ${id} no encontrado`);
    return producto;
  }

  async update(id: string, data: UpdateProductoDto) {
    await this.findOne(id); // Verifica que el producto existe
    return this.productoRepository.update(id, data);
  }

  async delete(id: string) {
    await this.findOne(id); // Verifica que el producto existe
    return this.productoRepository.delete(id);
  }
}
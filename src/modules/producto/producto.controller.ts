import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { CreateProductoDto } from './DTO/createProducto.dto';
import { UpdateProductoDto } from './DTO/updateProducto.dto';

@Controller('productos')
export class ProductoController {
  constructor(private readonly productoService: ProductoService) {}

  @Post()
  create(@Body() data: CreateProductoDto) {
    return this.productoService.create(data);
  }

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: UpdateProductoDto) {
    return this.productoService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productoService.delete(id);
  }
}
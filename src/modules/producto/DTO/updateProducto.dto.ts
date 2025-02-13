import { PartialType } from '@nestjs/mapped-types';
import { CreateProductoDto } from './createProducto.dto';

//la validacion de update muchas veces es parcial
export class UpdateProductoDto extends PartialType(CreateProductoDto) {}

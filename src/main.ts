import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Habilitar validación automática de DTOs
   app.useGlobalPipes(new ValidationPipe());

   app.enableCors(); // Habilita CORS
    
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();

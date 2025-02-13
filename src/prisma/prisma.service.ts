import { Injectable, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

// se debe usar injectable para poder usar el servicio
@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
   //OnModuleInit ejecuta coidigo cuando se llama la clase
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
      }
}
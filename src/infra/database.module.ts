import { Module, Global } from '@nestjs/common';
import { Client } from './database/entities/client.entity';
import { ClientRepository } from '../domain/repositories/client.repository';
import { ClientImpl } from './database/impl/client.impl';
import { TypeOrmModule } from '@nestjs/typeorm';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [{ provide: ClientRepository, useClass: ClientImpl }],
  exports: [ClientRepository],
})
export class DatabaseModule {}

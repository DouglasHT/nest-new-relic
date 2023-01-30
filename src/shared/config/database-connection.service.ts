import { Injectable } from '@nestjs/common/decorators';
import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleOptions,
  TypeOrmOptionsFactory,
} from '@nestjs/typeorm/dist';

@Injectable()
export class DatabaseConnectionService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      name: 'default',
      type: 'postgres',
      host: this.configService.get<string>('TYPEORM_HOST'),
      port: Number(this.configService.get<number>('TYPEORM_PORT')),
      username: this.configService.get<string>('TYPEORM_USERNAME'),
      password: this.configService.get<string>('TYPEORM_PASSWORD'),
      database: this.configService.get<string>('TYPEORM_DATABASE'),
      entities: [this.configService.get<string>('TYPEORM_ENTITIES')],
    };
  }
}

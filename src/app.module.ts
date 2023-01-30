import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConnectionService } from './shared/config/database-connection.service';
import { ConfigModule } from '@nestjs/config';
import { PresentationModule } from './presentation/presentation.module';
import { DomainModule } from './domain/domain.module';
import { DatabaseModule } from './infra/database.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    PresentationModule,
    DomainModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

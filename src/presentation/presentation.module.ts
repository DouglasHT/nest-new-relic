import { Module, Global } from '@nestjs/common';
import { DomainModule } from '../domain/domain.module';
import { ClientController } from './controller/client.controller';

@Global()
@Module({
  imports: [DomainModule],
  exports: [],
  controllers: [ClientController],
})
export class PresentationModule {}

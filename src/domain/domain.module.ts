import { Module, Global } from '@nestjs/common';
import { ClientModule } from './modules/usecases/client/client.module';

@Global()
@Module({
  imports: [ClientModule],
  exports: [ClientModule],
})
export class DomainModule {}

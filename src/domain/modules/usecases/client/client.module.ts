import { Module } from '@nestjs/common';
import { SaveClient } from './save';
import { UpdateClient } from './update';
import { FindByIdClient } from './find-by-id';

@Module({
  providers: [SaveClient, UpdateClient, FindByIdClient],
  exports: [SaveClient, UpdateClient, FindByIdClient],
})
export class ClientModule {}

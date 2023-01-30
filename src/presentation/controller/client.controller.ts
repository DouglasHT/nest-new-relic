import {
  Controller,
  Post,
  Get,
  Patch,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { SaveClient } from '../../domain/modules/usecases/client/save';
import { UpdateClient } from '../../domain/modules/usecases/client/update';
import { FindByIdClient } from '../../domain/modules/usecases/client/find-by-id';
import { Client } from '../../domain/modules/entities/client';

@Controller('client')
export class ClientController {
  constructor(
    private readonly saveClient: SaveClient,
    private readonly updateClient: UpdateClient,
    private readonly findByIdClient: FindByIdClient,
  ) {}

  @Post()
  save(@Body() payload: Client): Promise<any> {
    return this.saveClient.call(payload);
  }

  @Patch(':id')
  update(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() payload: Client,
  ): Promise<any> {
    return this.updateClient.call(id, payload);
  }

  @Get(':id')
  find(id: number): Promise<Client> {
    return this.findByIdClient.call(id);
  }
}

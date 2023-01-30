import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../../repositories/client.repository';
import { Client } from '../../entities/client';

@Injectable()
export class UpdateClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  call(id: number, payload: Client): Promise<any> {
    return this.clientRepository.update(id, payload);
  }
}

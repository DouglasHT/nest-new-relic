import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../../repositories/client.repository';
import { Client } from '../../entities/client';

@Injectable()
export class SaveClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  call(payload: Client): Promise<any> {
    return this.clientRepository.save(payload);
  }
}

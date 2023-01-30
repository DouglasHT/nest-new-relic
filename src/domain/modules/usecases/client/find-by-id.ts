import { Injectable } from '@nestjs/common';
import { ClientRepository } from '../../../repositories/client.repository';
import { Client } from '../../entities/client';

@Injectable()
export class FindByIdClient {
  constructor(private readonly clientRepository: ClientRepository) {}

  call(id: number): Promise<Client> {
    return this.clientRepository.findById(id);
  }
}

import { InjectRepository } from '@nestjs/typeorm';
import { ClientRepository } from '../../../domain/repositories/client.repository';
import { Client } from '../entities/client.entity';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';

export class ClientImpl implements ClientRepository {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  async save(payload: Client): Promise<any> {
    return await this.clientRepository
      .save(payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });
  }

  async update(id: number, payload: Client): Promise<any> {
    return await this.clientRepository
      .update(id, payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.log(error);

        throw new InternalServerErrorException(error);
      });
  }

  async findById(id: number): Promise<Client> {
    return await this.clientRepository
      .findOne({ where: { id } })
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw new InternalServerErrorException(error);
      });
  }
}

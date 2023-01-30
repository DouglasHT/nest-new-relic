import { Client } from '../modules/entities/client';

export abstract class ClientRepository {
  save: (payload: Client) => Promise<any>;
  update: (id: number, payload: Client) => Promise<any>;
  findById: (id: number) => Promise<Client>;
}

import { Knex } from 'knex';

export const DATABASE_CONNECTION = 'DATABASE_CONNECTION';
export interface DatabaseConnection {
  connect(): Promise<Connection>;
  close(): Promise<void>;
}

export type Connection = Knex;
export type Transaction = Knex.Transaction;

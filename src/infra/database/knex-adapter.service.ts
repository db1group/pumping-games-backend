import { Inject, Injectable } from '@nestjs/common';
import knexBuilder, { Knex } from 'knex';
import { DatabaseConnection } from './database-connection';
import {
  DATABASE_CREDENTIALS,
  DatabaseCredentials,
} from './database-credentials';

@Injectable()
export class KnexAdapterService implements DatabaseConnection {
  knex: Knex<any, unknown[]>;

  constructor(
    @Inject(DATABASE_CREDENTIALS)
    private readonly databaseCredentials: DatabaseCredentials,
  ) {
    this.load();
  }

  private async load() {
    const { username, password } = await this.databaseCredentials.load();

    this.knex = knexBuilder({
      client: 'pg',
      debug: false,
      acquireConnectionTimeout: 4000,
      connection: {
        host: process.env.DATABASE_HOST,
        port: Number(process.env.DATABASE_PORT),
        user: username,
        password: password,
        database: process.env.DATABASE_NAME,
      },
      pool: {
        min: 1,
        max: 4,
      },
    }).on('connection-error', (error, obj) => {
      console.error('Error on connection', error, obj);
    });
  }

  async connect(): Promise<Knex> {
    return this.knex;
  }

  async close(): Promise<void> {
    await this.knex.destroy();
  }
}

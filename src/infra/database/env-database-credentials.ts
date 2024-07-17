import { Injectable } from '@nestjs/common';
import { DatabaseCredentials } from './database-credentials';
@Injectable()
export class EnvDatabaseCredentials implements DatabaseCredentials {
  async load(): Promise<{
    readonly username: string;
    readonly password: string;
  }> {
    return {
      username: process.env.DATABASE_USER || '',
      password: process.env.DATABASE_PASSWORD || '',
    };
  }
}

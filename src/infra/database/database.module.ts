import { Global, Module } from '@nestjs/common';
import { KnexAdapterService } from './knex-adapter.service';
import { DATABASE_CONNECTION } from './database-connection';
import { DATABASE_CREDENTIALS } from './database-credentials';
import { EnvDatabaseCredentials } from './env-database-credentials';

@Global()
@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useClass: KnexAdapterService,
    },
    {
      provide: DATABASE_CREDENTIALS,
      useClass: EnvDatabaseCredentials,
    },
  ],
  exports: [DATABASE_CONNECTION, DATABASE_CREDENTIALS],
})
export class DatabaseModule {}

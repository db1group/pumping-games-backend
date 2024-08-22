import { Module } from '@nestjs/common';

import { NATION_EVENT_REPOSITORY } from 'src/application/repositories/nation-event.repository';
import { CreateNationEvent } from 'src/application/usecases/nation-event/create-nation-event';
import { NationEventsController } from './controllers/nation-events.controller';
import { NationEventRepositoryPostgres } from 'src/infra/repositories/postgres/nation-event/nation-event.repository.postgres';
import { UserModule } from '../users/users.module';

const usecases = [CreateNationEvent];

const repositories = [
  {
    provide: NATION_EVENT_REPOSITORY,
    useClass: NationEventRepositoryPostgres,
  },
];
@Module({
  imports: [UserModule],
  controllers: [NationEventsController],
  providers: [...usecases, ...repositories],
  exports: [...repositories],
})
export class NationEventsModule {}

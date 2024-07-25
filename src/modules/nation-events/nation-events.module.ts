import { Module } from '@nestjs/common';

import { NATION_EVENT_REPOSITORY } from 'src/application/repositories/nation-event.repository';
import { CreateNationEvent } from 'src/application/usecases/nation-event/create-nation-event';
import { NationEventsController } from './controllers/nation-events.controller';
import { NationEventRepositoryPostgres } from 'src/infra/repositories/postgres/nation-event/nation-event.repository.postgres';

const usecases = [CreateNationEvent];

const repositories = [
  {
    provide: NATION_EVENT_REPOSITORY,
    useClass: NationEventRepositoryPostgres,
  },
];
@Module({
  controllers: [NationEventsController],
  providers: [...usecases, ...repositories],
})
export class NationEventsModule {}

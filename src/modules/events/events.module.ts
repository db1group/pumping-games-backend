import { Module } from '@nestjs/common';

import { EventsController } from './controllers/events.controller';
import { CreateTeamEvent } from 'src/application/usecases/nation-event/create-nation-event';
import { TEAM_EVENT_REPOSITORY } from 'src/application/repositories/team-event.repository';
import { TeamEventRepositoryMemory } from 'src/infra/repositories/memory/event/team-event.repository.memory';

const usecases = [CreateTeamEvent];

const repositories = [
  {
    provide: TEAM_EVENT_REPOSITORY,
    useClass: TeamEventRepositoryMemory,
  },
];
@Module({
  controllers: [EventsController],
  providers: [...usecases, ...repositories],
})
export class EventsModule {}

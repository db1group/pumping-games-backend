import { Module } from '@nestjs/common';

import { TeamsController } from './controllers/teams.controller';
import { CreateTeam } from 'src/application/usecases/team/create-team';
import { TEAM_REPOSITORY } from 'src/application/repositories/team.repository';
import { TeamRepositoryMemory } from 'src/infra/repositories/memory/team/team.repository.memory';
import { UserModule } from '../users/users.module';

const usecases = [CreateTeam];

const repositories = [
  {
    provide: TEAM_REPOSITORY,
    useClass: TeamRepositoryMemory,
  },
];
@Module({
  imports: [UserModule],
  controllers: [TeamsController],
  providers: [...usecases, ...repositories],
})
export class TeamsModule {}

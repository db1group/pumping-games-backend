import { Module } from '@nestjs/common';

import { TeamsController } from './controllers/teams.controller';
import { CreateTeam } from 'src/application/usecases/team/create-team';
import { TEAM_REPOSITORY } from 'src/application/repositories/team.repository';
import { UserModule } from '../users/users.module';
import { TeamRepositoryPostgres } from 'src/infra/repositories/postgres/team/team.repository.postgres';
import { AwsS3Service } from 'src/infra/bucket/aws-s3.service';
import { BUCKET_SERVICE } from 'src/application/services/bucket.service';
import { AddParticipantOnTeam } from 'src/application/usecases/team/add-participant-on-team';

const usecases = [CreateTeam, AddParticipantOnTeam];

const repositories = [
  {
    provide: TEAM_REPOSITORY,
    useClass: TeamRepositoryPostgres,
  },
];

const services = [
  {
    provide: BUCKET_SERVICE,
    useClass: AwsS3Service,
  },
];
@Module({
  imports: [UserModule],
  controllers: [TeamsController],
  providers: [...usecases, ...repositories, ...services],
})
export class TeamsModule {}

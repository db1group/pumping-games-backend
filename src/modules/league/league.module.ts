import { Module } from '@nestjs/common';
import { BUCKET_SERVICE } from 'src/application/services/bucket.service';
import { AwsS3Service } from 'src/infra/bucket/aws-s3.service';
import { UserModule } from '../users/users.module';
import { CreateTeamLeague } from 'src/application/usecases/league/create-team-league';
import { CreateIndividualLeague } from 'src/application/usecases/league/create-individual-league';
import { LeagueController } from './controllers/league.controller';
import { TEAM_LEAGUE_REPOSITORY } from 'src/application/repositories/league.repository';
import { TeamLeagueRepositoryPostgres } from 'src/infra/repositories/postgres/league/team-league.repository.postgres';

const usecases = [CreateTeamLeague, CreateIndividualLeague];

const repositories = [
  {
    provide: TEAM_LEAGUE_REPOSITORY,
    useClass: TeamLeagueRepositoryPostgres,
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
  controllers: [LeagueController],
  providers: [...usecases, ...repositories, ...services],
})
export class LeagueModule {}

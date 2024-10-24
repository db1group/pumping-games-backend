import { Module } from '@nestjs/common';

import { CreateNation } from 'src/application/usecases/nation/create-nation';
import { NationController } from './controllers/nation.controller';
import { NATION_REPOSITORY } from 'src/application/repositories/nation.repository';
import { NationRepositoryPostgres } from 'src/infra/repositories/postgres/nation/nation.repository.postgres';
import { BUCKET_SERVICE } from 'src/application/services/bucket.service';
import { AwsS3Service } from 'src/infra/bucket/aws-s3.service';
import { UserModule } from '../users/users.module';
import { AddParticipantOnNation } from 'src/application/usecases/nation/add-participant-on-nation';
import { NationEventsModule } from '../nation-events/nation-events.module';

const usecases = [CreateNation, AddParticipantOnNation];

const repositories = [
  {
    provide: NATION_REPOSITORY,
    useClass: NationRepositoryPostgres,
  },
];
const services = [
  {
    provide: BUCKET_SERVICE,
    useClass: AwsS3Service,
  },
];
@Module({
  imports: [UserModule, NationEventsModule],
  controllers: [NationController],
  providers: [...usecases, ...repositories, ...services],
})
export class NationsModule {}

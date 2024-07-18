import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/application/repositories/user.repository';
import { UserRepositoryPostgres } from 'src/infra/repositories/postgres/user/user.repository.postgres';

const repositories = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepositoryPostgres,
  },
];
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class UserModule {}

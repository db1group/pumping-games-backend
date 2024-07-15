import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/application/repositories/user.repository';
import { UserRepositoryMemory } from 'src/infra/repositories/memory/user/user.repository.memory';

const repositories = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepositoryMemory,
  },
];
@Module({
  providers: [...repositories],
  exports: [...repositories],
})
export class UserModule {}

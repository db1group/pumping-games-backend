import { Module } from '@nestjs/common';
import { USER_REPOSITORY } from 'src/application/repositories/user.repository';
import { KeycloakAdminService } from 'src/infra/auth/keycloak.service';
import { UserRepositoryKeycloak } from 'src/infra/repositories/memory/user/user.repository.keycloak';

const repositories = [
  {
    provide: USER_REPOSITORY,
    useClass: UserRepositoryKeycloak,
  },
];
@Module({
  providers: [...repositories, KeycloakAdminService],
  exports: [...repositories],
})
export class UserModule {}

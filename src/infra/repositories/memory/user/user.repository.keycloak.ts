import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories/user.repository';
import { User } from 'src/domain/entities/user/user';
import { KeycloakAdminService } from 'src/infra/auth/keycloak.service';

@Injectable()
export class UserRepositoryKeycloak implements UserRepository {
  constructor(private readonly keycloakAdminService: KeycloakAdminService) {}

  async findUserById(id: string): Promise<User> {
    const data = await this.keycloakAdminService.getUserById(id);
    console.log(data);
    return new User({
      name: data.firstName,
      email: data.email,
      id: data.id,
      roles: data.clientRoles.map((role) => role.name),
    });
  }

  async getListOfUsers(ids: string[]): Promise<User[]> {
    const users = await this.keycloakAdminService.getUsersByIds(ids);
    return users.map((data) => {
      return new User({
        name: data.firstName,
        email: data.email,
        id: data.id,
        roles: data.clientRoles.map((role) => role.name),
      });
    });
  }
}

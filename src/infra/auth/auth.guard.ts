import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/application/repositories/user.repository';
import { User } from 'src/domain/entities/user/user';

@Injectable()
export class KeycloakAuthGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    if (!request.headers.authorization) {
      return false;
    }
    const keycloakUser = request.user;
    const keycloakUserId = keycloakUser.sub;

    const hasUser =
      await this.userRepository.findUserByAuthProviderId(keycloakUserId);

    if (!hasUser) {
      const user = new User({
        email: keycloakUser.email,
        name: keycloakUser.name,
        authProviderId: keycloakUserId,
        roles: keycloakUser.roles,
      });
      const newUser = await this.userRepository.create(user);
      request.user = newUser;
      return true;
    }

    request.user = hasUser;

    return true;
  }
}

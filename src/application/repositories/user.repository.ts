import { User } from 'src/domain/entities/user/user';

export const USER_REPOSITORY = 'USER_REPOSITORY';
export interface UserRepository {
  create(user: User): Promise<User>;
  findUserById(id: string): Promise<User>;
  findUserByAuthProviderId(authProviderId: string): Promise<User>;
  getListOfUsers(id: string[]): Promise<User[]>;
}

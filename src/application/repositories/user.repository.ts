import { User } from 'src/domain/entities/user/user';

export interface UserRepository {
  createUser(user: User): Promise<void>;
  findUserById(id: string): Promise<User>;
  getListOfUsers(id: string[]): Promise<User[]>;
}

import { UserRepository } from 'src/application/repositories/user.repository';
import { User } from 'src/domain/entities/user/user';

export class UserRepositoryMemory implements UserRepository {
  users: any = [];
  async createUser(user: User): Promise<void> {
    this.users.push(user);
  }

  async findUserById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id) || null;
  }

  async getListOfUsers(ids: string[]): Promise<User[]> {
    return this.users.filter((user) => ids.includes(user.id));
  }
}

import { Inject } from '@nestjs/common';
import { UserRepository } from 'src/application/repositories/user.repository';
import { User } from 'src/domain/entities/user/user';
import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';

export class UserRepositoryPostgres implements UserRepository {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseConnection: DatabaseConnection,
  ) {}

  async create(user: User): Promise<User> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();
    try {
      const [userSaved] = await connection('users')
        .transacting(transaction)
        .insert({
          name: user.name.getValue(),
          email: user.email.getValue(),
          auth_provider_id: user.authProviderId,
        })
        .returning('*');
      await transaction.commit();
      return User.restoreFromDatabase({
        id: userSaved.id,
        name: userSaved.name,
        email: userSaved.email,
        authProviderId: userSaved.auth_provider_id,
      });
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
  async findUserById(id: string): Promise<User> {
    const connection = await this.databaseConnection.connect();
    const userData = await connection('users').where('id', id).first();
    if (!userData) {
      return null;
    }
    return new User({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      authProviderId: userData.auth_provider_id,
    });
  }

  async findUserByAuthProviderId(authProviderId: string): Promise<User> {
    const connection = await this.databaseConnection.connect();
    const userData = await connection('users')
      .where('auth_provider_id', authProviderId)
      .first();
    if (!userData) {
      return null;
    }
    return new User({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      authProviderId: userData.auth_provider_id,
    });
  }
  async getListOfUsers(id: string[]): Promise<User[]> {
    const connection = await this.databaseConnection.connect();
    const usersData = await connection('users').whereIn('id', id);
    return usersData.map((userData) => {
      return new User({
        id: userData.id,
        name: userData.name,
        email: userData.email,
        authProviderId: userData.auth_provider_id,
      });
    });
  }
}

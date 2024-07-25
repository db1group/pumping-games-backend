import { Inject } from '@nestjs/common';
import { NationEventRepository } from 'src/application/repositories/nation-event.repository';
import { NationEvent } from 'src/domain/entities/event/nation-event';
import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';

export class NationEventRepositoryPostgres implements NationEventRepository {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseConnection: DatabaseConnection,
  ) {}

  async createEvent(event: NationEvent): Promise<void> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();

    const eventModel: NationEventDatabaseModel = {
      id: event.id,
      name: event.getName(),
      status: event.getStatus(),
      logo_url: event.logo.getValue(),
      season: event.season.getValue().toString(),
    };

    try {
      await connection('nation_events')
        .transacting(transaction)
        .insert(eventModel);
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
  async updateEvent(event: NationEvent): Promise<void> {
    console.log(event);
  }
  async findEventById(id: string): Promise<NationEvent> {
    console.log(id);
    return null;
  }
  async removeEvent(event: NationEvent): Promise<void> {
    console.log(event);
  }
}

export type NationEventDatabaseModel = {
  id: string;
  name: string;
  status: string;
  logo_url: string;
  season: string;
  created_at?: Date;
  updated_at?: Date;
};

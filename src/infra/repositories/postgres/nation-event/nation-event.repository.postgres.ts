import { Inject, Injectable } from '@nestjs/common';
import { NationEventRepository } from 'src/application/repositories/nation-event.repository';
import { NationEvent } from 'src/domain/entities/event/nation-event';

import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';

import { NationEventRestoreBuilder } from './nation-event-restore.builder';
import { NationEventUpdateBuilder } from './nation-event-update.builder';

@Injectable()
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
      await connection('nation_events').insert(eventModel);
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
  async updateEvent(event: NationEvent): Promise<void> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();

    const updateBuilder = new NationEventUpdateBuilder(connection, transaction);
    return updateBuilder.build(event);
  }

  async findEventById(id: string): Promise<NationEvent> {
    const connection = await this.databaseConnection.connect();
    const nationEvent = await new NationEventRestoreBuilder(connection).build(
      id,
    );
    return nationEvent;
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

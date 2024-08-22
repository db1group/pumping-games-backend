import { HttpException, Inject, Injectable } from '@nestjs/common';
import { NationRepository } from 'src/application/repositories/nation.repository';
import { Participant } from 'src/domain/entities/participant/participant';
import { Team } from 'src/domain/entities/team/Team';
import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';
import { ParticipantDatabaseModel } from '../team/team.repository.postgres';

@Injectable()
export class NationRepositoryPostgres implements NationRepository {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseConnection: DatabaseConnection,
  ) {}

  async createNation(nation: Team, nationEventId: string): Promise<void> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();

    const nationModel: NationDatabaseModel = {
      id: nation.id,
      name: nation.name.getValue(),
      logo_url: nation.logo.getValue(),
      status: nation.getStatus().toString(),
    };

    const participantsModel: ParticipantDatabaseModel[] =
      nation.participants.map((participant: Participant) => ({
        name: participant.name.getValue(),
        email: participant.email.getValue(),
        owner: participant.owner,
        user_id: participant.id,
      }));

    try {
      const [nation] = await transaction('nations')
        .insert(nationModel)
        .returning('id');

      const participantsIds = await transaction('participants')
        .insert(
          participantsModel.map((participant) => ({
            ...participant,
          })),
        )
        .returning('id');

      await transaction('nations_has_participants').insert(
        participantsIds.map((participants) => ({
          nation_id: nation.id,
          participant_id: participants.id,
        })),
      );

      await transaction('nation_events_has_nations').insert({
        nation_event_id: nationEventId,
        nation_id: nation.id,
      });

      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw new HttpException('Erro ao cadastrar a nação', error.status);
    }
  }

  findNationById(nationId: string): Promise<Team> {
    console.log('nationId', nationId);
    throw new Error('Method not implemented.');
  }
}

export type NationDatabaseModel = {
  id: string;
  name: string;
  status: string;
  logo_url: string;
  created_at?: string;
  updated_at?: string;
};

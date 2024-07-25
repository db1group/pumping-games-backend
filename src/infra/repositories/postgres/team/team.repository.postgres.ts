import { Inject, Injectable } from '@nestjs/common';
import { TeamRepository } from 'src/application/repositories/team.repository';
import { Participant } from 'src/domain/entities/participant/participant';
import { Team } from 'src/domain/entities/team/Team';
import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';

@Injectable()
export class TeamRepositoryPostgres implements TeamRepository {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseConnection: DatabaseConnection,
  ) {}

  async createTeam(team: Team): Promise<void> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();

    const teamModel: TeamDatabaseModel = {
      id: team.id,
      name: team.name.getValue(),
      logo_url: team.logo.getValue(),
    };

    const participantsModel: ParticipantDatabaseModel[] = team.participants.map(
      (participant: Participant) => ({
        name: participant.name.getValue(),
        email: participant.email.getValue(),
        owner: participant.owner,
        status: participant.getStatus().toString(),
        user_id: participant.id,
      }),
    );

    try {
      const [team] = await transaction('teams')
        .insert(teamModel)
        .returning('id');

      const participantsIds = await transaction('participants')
        .insert(
          participantsModel.map((participant) => ({
            ...participant,
          })),
        )
        .returning('id');

      await transaction('teams_has_participants').insert(
        participantsIds.map((participants) => ({
          team_id: team.id,
          participant_id: participants.id,
        })),
      );

      transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async updateTeam(team: Team): Promise<void> {
    console.log('updateTeam', team);
    throw new Error('Method not implemented.');
  }

  async findTeamById(id: string): Promise<Team> {
    console.log('findTeamById', id);
    throw new Error('Method not implemented.');
  }
}

export type TeamDatabaseModel = {
  id: string;
  name: string;
  logo_url: string;
  created_at?: string;
  updated_at?: string;
};

export type ParticipantDatabaseModel = {
  id?: string;
  name: string;
  email: string;
  owner: boolean;
  status: string;
  user_id: string;
  created_at?: string;
  updated_at?: string;
};

export type TeamHasParticipantsDatabaseModel = {
  team_id: string;
  participant_id: string;
};

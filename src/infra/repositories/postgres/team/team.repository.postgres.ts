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

    const participantsModel = team.participants.map(
      (participant: Participant) => ({
        id: participant.id,
        name: participant.name.getValue(),
        email: participant.email.getValue(),
        owner: participant.owner,
        status: participant.getStatus(),
        user_id: participant.id,
      }),
    );

    try {
      // Inserir na tabela teams
      await connection('teams')
        .transacting(transaction)
        .insert({
          id: team.id,
          name: team.name.getValue(),
          logo_url: team.logo.getValue(),
        })
        .returning('*');

      // Inserir na tabela participants
      await connection('participants')
        .transacting(transaction)
        .insert(participantsModel);

      // Confirmar a transação
      await transaction.commit();
    } catch (error) {
      // Reverter a transação em caso de erro
      await transaction.rollback();
      throw error;
    } finally {
      // Fechar a conexão
      connection.destroy();
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

import { Inject } from '@nestjs/common';
import { LeagueRepository } from 'src/application/repositories/league.repository';
import { TeamLeague } from 'src/domain/entities/league/team-league';
import {
  DATABASE_CONNECTION,
  DatabaseConnection,
} from 'src/infra/database/database-connection';

export class TeamLeagueRepositoryPostgres
  implements LeagueRepository<TeamLeague>
{
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly databaseConnection: DatabaseConnection,
  ) {}

  async save(league: TeamLeague, nationEventId?: string): Promise<void> {
    const connection = await this.databaseConnection.connect();
    const transaction = await connection.transaction();

    const leagueData = league.getLeague();
    const teamLeagueModel: TeamLeagueDatabaseModel = {
      id: leagueData.id,
      name: leagueData.name,
      logo_url: leagueData.logo,
      season: leagueData.season,
      status: leagueData.status,
      min_teams: leagueData.minTeams,
      max_teams: leagueData.maxTeams,
    };

    try {
      const [leagueSaved] = await transaction('team_leagues')
        .insert(teamLeagueModel)
        .returning('*');

      if (nationEventId) {
        await transaction('nation_events_has_team_leagues').insert({
          nation_event_id: nationEventId,
          team_league_id: leagueSaved.id,
        });
      }

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }

  async findById(leagueId: string): Promise<TeamLeague> {
    console.log('Method not implemented.', leagueId);
    throw new Error('Method not implemented.');
  }
}

export type TeamLeagueDatabaseModel = {
  id: string;
  name: string;
  logo_url: string;
  season: string;
  status: string;
  min_teams: number;
  max_teams: number;
};

import { Team } from 'src/domain/teams/team';

export interface TeamRepository {
  createTeam(team: Team): Promise<void>;
  findTeamById(id: string): Promise<Team>;
}

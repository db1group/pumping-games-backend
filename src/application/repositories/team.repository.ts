import { Team } from 'src/domain/entities/team/Team';

export const TEAM_REPOSITORY = 'TEAM_REPOSITORY';

export interface TeamRepository {
  createTeam(team: Team): Promise<void>;
  updateTeam(team: Team): Promise<void>;
  findTeamById(id: string): Promise<Team>;
}

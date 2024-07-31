import { League } from 'src/domain/entities/league/league';

export const TEAM_LEAGUE_REPOSITORY = 'TEAM_LEAGUE_REPOSITORY';
export const INDIVIDUAL_LEAGUE_REPOSITORY = 'INDIVIDUAL_LEAGUE_REPOSITORY';
export interface LeagueRepository<T extends League> {
  save(league: T, nationEventId?: string): Promise<void>;
  findById(leagueId: string): Promise<T>;
}

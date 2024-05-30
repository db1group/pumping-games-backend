import { League } from 'src/domain/entities/league/league';

export interface LeagueRepository<T extends League> {
  save(league: T): Promise<void>;
}

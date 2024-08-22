import { Team } from 'src/domain/entities/team/Team';

export const NATION_REPOSITORY = 'NATION_REPOSITORY';
export interface NationRepository {
  createNation(nation: Team, nationEventId: string): Promise<void>;
  findNationById(nationId: string): Promise<Team>;
}

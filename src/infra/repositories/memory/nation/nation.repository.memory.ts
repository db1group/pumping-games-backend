import { Injectable } from '@nestjs/common';
import { NationRepository } from 'src/application/repositories/nation.repository';
import { Team } from 'src/domain/entities/team/Team';

@Injectable()
export class NationRepositoryMemory implements NationRepository {
  nations: any;

  constructor() {
    this.nations = [];
  }

  async createNation(nation: Team, nationEventId: string): Promise<void> {
    this.nations.push({ ...nation, nationEventId });
  }

  async findNationById(nationId: string): Promise<Team> {
    return this.nations.find((nation) => nation.id === nationId) || null;
  }
}

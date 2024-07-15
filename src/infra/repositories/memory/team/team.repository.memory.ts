import { Injectable } from '@nestjs/common';
import { TeamRepository } from 'src/application/repositories/team.repository';
import { Team } from 'src/domain/entities/team/Team';

@Injectable()
export class TeamRepositoryMemory implements TeamRepository {
  teams: any;
  constructor() {
    this.teams = [];
  }
  async createTeam(team: Team): Promise<void> {
    this.teams.push(team);
  }
  async updateTeam(team: Team): Promise<void> {
    this.teams = this.teams.map((t) => (t.id === team.id ? team : t));
  }
  async findTeamById(id: string): Promise<Team> {
    return this.teams.find((team) => team.id === id) || null;
  }

  async findTeamsByUserId(userId: string): Promise<Team[]> {
    return this.teams.filter((team) => team.ownerId === userId);
  }

  async findTeamsByEventId(eventId: string): Promise<Team[]> {
    return this.teams.filter((team) => team.eventId === eventId);
  }
}

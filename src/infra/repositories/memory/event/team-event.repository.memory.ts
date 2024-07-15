import { Injectable } from '@nestjs/common';
import { TeamEventRepository } from 'src/application/repositories/team-event.repository';

@Injectable()
export class TeamEventRepositoryMemory implements TeamEventRepository {
  events: any;
  constructor() {
    this.events = [];
  }

  async createEvent(event) {
    this.events.push(event);
  }

  async updateEvent(event) {
    this.events = this.events.map((e) => (e.id === event.id ? event : e));
  }

  findEventById(id) {
    return this.events.find((event) => event.id === id) || null;
  }

  async removeEvent(event) {
    this.events = this.events.filter((e) => e.id !== event.id);
  }

  findEventsByTeamId(teamId) {
    return this.events.filter((event) => event.teamId === teamId);
  }
}

import { Inject, Injectable } from '@nestjs/common';
import {
  TEAM_EVENT_REPOSITORY,
  TeamEventRepository,
} from 'src/application/repositories/team-event.repository';
import { EventStatus } from 'src/domain/entities/event/event-status';
import { NationEvent } from 'src/domain/entities/event/nation-event';
import { TeamLeagueInput } from 'src/domain/entities/league/team-league';

@Injectable()
export class CreateNationEvent {
  constructor(
    @Inject(TEAM_EVENT_REPOSITORY)
    private readonly eventRepository: TeamEventRepository,
  ) {}

  async execute(params: CreateTeamEventInput): Promise<void> {
    const status = EventStatus.PENDING;
    const teamEvent = new NationEvent({
      name: params.name,
      status,
      season: params.season,
    });

    return this.eventRepository.createEvent(teamEvent);
  }
}

export interface CreateTeamEventInput {
  name: string;
  status?: string;
  logo?: string;
  season?: number;
  leagues?: TeamLeagueInput[];
}

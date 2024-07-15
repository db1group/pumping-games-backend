import { Inject, Injectable } from '@nestjs/common';
import {
  TEAM_EVENT_REPOSITORY,
  TeamEventRepository,
} from 'src/application/repositories/team-event.repository';
import { EventStatus } from 'src/domain/entities/event/event-status';
import { TeamEvent } from 'src/domain/entities/event/team-event';
import { TeamLeagueInput } from 'src/domain/entities/league/team-league';

@Injectable()
export class CreateTeamEvent {
  constructor(
    @Inject(TEAM_EVENT_REPOSITORY)
    private readonly eventRepository: TeamEventRepository,
  ) {}

  async execute(params: CreateTeamEventInput): Promise<void> {
    const status = EventStatus.PENDING;
    const teamEvent = new TeamEvent({
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

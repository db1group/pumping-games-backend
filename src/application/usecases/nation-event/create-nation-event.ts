import { Inject, Injectable } from '@nestjs/common';
import {
  NATION_EVENT_REPOSITORY,
  NationEventRepository,
} from 'src/application/repositories/nation-event.repository';

import { EventStatus } from 'src/domain/entities/event/event-status';
import { NationEvent } from 'src/domain/entities/event/nation-event';
import { TeamLeagueInput } from 'src/domain/entities/league/team-league';

@Injectable()
export class CreateNationEvent {
  constructor(
    @Inject(NATION_EVENT_REPOSITORY)
    private readonly eventRepository: NationEventRepository,
  ) {}

  async execute(params: CreateNationEventInput): Promise<void> {
    const status = EventStatus.PENDING;
    const nationEvent = new NationEvent({
      name: params.name,
      status,
      season: params.season,
    });

    return this.eventRepository.createEvent(nationEvent);
  }
}

export interface CreateNationEventInput {
  name: string;
  status?: string;
  logo?: string;
  season?: string;
  leagues?: TeamLeagueInput[];
}

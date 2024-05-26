import DomainEvent from './domain-events';
import { TeamEvents } from './team-events';

export class TeamCreatedEvent implements DomainEvent {
  readonly name: string;

  constructor(readonly teamId: string) {
    this.name = TeamEvents.TEAM_CREATED;
  }
}

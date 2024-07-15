import { TeamEvent } from 'src/domain/entities/event/team-event';

export const TEAM_EVENT_REPOSITORY = 'TEAM_EVENT_REPOSITORY';
export interface TeamEventRepository {
  createEvent(event: TeamEvent): Promise<void>;
  updateEvent(event: TeamEvent): Promise<void>;
  findEventById(id: string): Promise<TeamEvent | null>;
  removeEvent(event: TeamEvent): Promise<void>;
}

import { NationEvent } from 'src/domain/entities/event/nation-event';

export const NATION_EVENT_REPOSITORY = 'NATION_EVENT_REPOSITORY';
export interface NationEventRepository {
  createEvent(event: NationEvent): Promise<void>;
  updateEvent(event: NationEvent): Promise<void>;
  findEventById(id: string): Promise<NationEvent>;
  removeEvent(event: NationEvent): Promise<void>;
}

import { NationEventRepository } from 'src/application/repositories/nation-event.repository';
import { NationEvent } from 'src/domain/entities/event/nation-event';

export class NationEventRepositoryMemory implements NationEventRepository {
  nationsEvents: any;

  constructor(nationEvents: NationEvent[] = []) {
    this.nationsEvents = nationEvents || [];
  }

  async createEvent(event: NationEvent): Promise<void> {
    this.nationsEvents.push(event);
  }
  async updateEvent(event: NationEvent): Promise<void> {
    const index = this.nationsEvents.findIndex((e) => e.id === event.id);
    this.nationsEvents[index] = event;
  }
  async findEventById(id: string): Promise<NationEvent> {
    return this.nationsEvents.find((event) => event.id === id) || null;
  }
  async removeEvent(event: NationEvent): Promise<void> {
    this.nationsEvents = this.nationsEvents.filter((e) => e.id !== event.id);
  }
}

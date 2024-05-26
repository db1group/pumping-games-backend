import DomainEvent from 'src/domain/events/domain-events';

export default class Observable {
  observers: { eventName: string; callback: any }[];

  constructor() {
    this.observers = [];
  }

  register(eventName: string, callback: any) {
    this.observers.push({ eventName, callback });
  }

  async notify(event: DomainEvent) {
    for (const observer of this.observers) {
      if (observer.eventName === event.name) {
        await observer.callback(event);
      }
    }
  }
}

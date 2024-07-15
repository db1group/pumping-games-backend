export class EventName {
  private value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error('Event name is required');
    }
    this.value = value;
  }

  getValue() {
    return this.value;
  }
}

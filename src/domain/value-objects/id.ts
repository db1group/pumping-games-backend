import { randomUUID } from 'crypto';

export class Id {
  private readonly value: string;

  constructor(id?: string) {
    if (id && !this.validateUUID(id)) {
      throw new Error('Invalid UUID');
    }
    this.value = id || randomUUID();
  }

  private validateUUID(uuid: string): boolean {
    const regex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    return regex.test(uuid);
  }

  toString(): string {
    return this.value;
  }

  equals(otherId: Id): boolean {
    return this.value === otherId.value;
  }
}

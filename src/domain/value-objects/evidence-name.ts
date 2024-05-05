export class EvidenceName {
  private readonly value: string;

  constructor(value: string) {
    if (!value) {
      throw new Error('Evidence name is required');
    }
    if (value.length < 3) {
      throw new Error('Evidence name is too short, minimum 3 characters');
    }
    if (value.length > 100) {
      throw new Error('Evidence name is too long, maximum 100 characters');
    }
    this.value = value;
  }

  getValue(): string {
    return this.value;
  }
}

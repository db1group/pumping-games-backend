export class LeagueName {
  constructor(private name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (name.length < 3) {
      throw new Error('Name should be at least 3 characters');
    }
    if (name.length > 255) {
      throw new Error('Name should not exceed 255 characters');
    }
  }

  getValue() {
    return this.name;
  }
}

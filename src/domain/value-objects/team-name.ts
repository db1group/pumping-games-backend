export class TeamName {
  constructor(private name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (name.length < 3) {
      throw new Error('Name should be at least 3 characters');
    }
    if (name.length > 100) {
      throw new Error('Name should not exceed 100 characters');
    }

    this.name = name;
  }

  getValue() {
    return this.name;
  }
}

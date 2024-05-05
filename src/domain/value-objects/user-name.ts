export class UserName {
  constructor(private name: string) {
    if (!name) {
      throw new Error('Name is required');
    }
    if (name.length < 2) {
      throw new Error('Name should be at least 2 characters');
    }
    if (name.length > 50) {
      throw new Error('Name should not exceed 50 characters');
    }
  }

  getValue() {
    return this.name;
  }
}

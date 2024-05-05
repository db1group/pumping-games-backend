export class TeamAlreadyExistsError extends Error {
  constructor() {
    super('Team already exists');
    this.name = 'TeamAlreadyExistsError';
  }
}

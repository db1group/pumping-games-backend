export class MaxTeamsReachedError extends Error {
  constructor() {
    super('Max number of teams reached');
    this.name = 'MaxTeamsReachedError';
  }
}

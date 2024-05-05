export class LeagueAlreadyCancelledError extends Error {
  constructor() {
    super('Cannot add a team to a cancelled league');
    this.name = 'LeagueAlreadyCancelledError';
  }
}

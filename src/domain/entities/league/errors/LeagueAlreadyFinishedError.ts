export class LeagueAlreadyFinishedError extends Error {
  constructor() {
    super('Cannot add a team to a finished league');
    this.name = 'LeagueAlreadyFinishedError';
  }
}

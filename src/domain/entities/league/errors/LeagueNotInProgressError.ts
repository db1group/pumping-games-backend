export class LeagueNotInProgressError extends Error {
  constructor() {
    super('League is not in progress');
    this.name = 'LeagueNotInProgressError';
  }
}

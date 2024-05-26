export class CannotFinishNotInProgressLeagueError extends Error {
  constructor() {
    super('Cannot finish a league that is not in progress');
    this.name = 'CannotFinishNotInProgressLeagueError';
  }
}

export class CannotCancelFinishedLeagueError extends Error {
  constructor() {
    super('Cannot cancel a finished league');
    this.name = 'CannotCancelFinishedLeagueError';
  }
}

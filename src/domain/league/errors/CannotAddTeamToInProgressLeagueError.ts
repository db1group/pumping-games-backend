export class CannotAddTeamToInProgressLeagueError extends Error {
  constructor() {
    super('Cannot add a team to a league in progress');
    this.name = 'CannotAddTeamToInProgressLeagueError';
  }
}

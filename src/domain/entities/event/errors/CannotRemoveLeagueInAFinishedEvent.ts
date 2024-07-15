export class CannotRemoveLeagueInAFinishedEvent extends Error {
  constructor() {
    super('Cannot remove a league in a finished event');
    this.name = 'CannotRemoveLeagueInAFinishedEvent';
  }
}

export class CannotAddLeagueInAFinishedEvent extends Error {
  constructor() {
    super('Cannot add league in a finished event');
    this.name = 'CannotAddLeagueInAFinishedEvent';
  }
}

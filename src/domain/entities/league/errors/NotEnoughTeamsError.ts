export class NotEnoughTeamsError extends Error {
  constructor() {
    super('Not enough teams to start the league');
    this.name = 'NotEnoughTeamsError';
  }
}

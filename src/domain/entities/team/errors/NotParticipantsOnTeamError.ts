export class NotEnoughParticipantsOnTeamError extends Error {
  constructor() {
    super('Not enough participants to start the team');
    this.name = 'NotEnoughParticipantsError';
  }
}

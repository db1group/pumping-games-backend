export class CannotAddParticipantIsAlreadyAnotherTeamError extends Error {
  constructor() {
    super('Cannot add participant is already another team');
    this.name = 'CannotAddParticipantIsAlreadyAnotherTeamError';
  }
}

export class CannotAddParticipantOnDeletedTeamError extends Error {
  constructor() {
    super('Cannot add participants to a deleted team');
    this.name = 'CannotAddParticipantOnDeletedTeamError';
  }
}

export class CannotConfirmDeletedTeamError extends Error {
  constructor() {
    super('Cannot confirm a deleted team');
    this.name = 'CannotConfirmDeletedTeamError';
  }
}

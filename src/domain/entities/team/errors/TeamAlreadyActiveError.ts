export class TeamAlreadyActiveError extends Error {
  constructor() {
    super('Team is already confirmed');
    this.name = 'CannotConfirmAnActiveTeamError';
  }
}

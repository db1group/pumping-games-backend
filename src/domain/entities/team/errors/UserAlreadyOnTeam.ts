export class UserAlreadyOnTeam extends Error {
  constructor() {
    super('User is already on team');
    this.name = 'UserAlreadyOnTeam';
  }
}

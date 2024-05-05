import { LeagueStatus } from '../league-status';

export class CannotChangeNameError extends Error {
  constructor(readonly status: LeagueStatus) {
    super(`Cannot change the name of a league that is ${status.toLowerCase()}`);
    this.name = 'CannotChangeNameError';
  }
}

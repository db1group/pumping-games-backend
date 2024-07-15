export class CannotFinishNotInProgressEventError extends Error {
  constructor() {
    super('Cannot finish a event that is not in progress');
    this.name = 'CannotFinishNotInProgressEventError';
  }
}

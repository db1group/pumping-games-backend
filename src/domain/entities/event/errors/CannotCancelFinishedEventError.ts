export class CannotCancelFinishedEventError extends Error {
  constructor() {
    super('Cannot cancel a finished event');
    this.name = 'CannotCancelFinishedEventError';
  }
}

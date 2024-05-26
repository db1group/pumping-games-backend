export class MaxParticipantsReachedError extends Error {
  constructor() {
    super('Max number of participants reached');
    this.name = 'MaxParticipantsReachedError';
  }
}

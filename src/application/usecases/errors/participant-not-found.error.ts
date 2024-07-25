export class ParticipantNotFoundError extends Error {
  constructor() {
    super();
    this.name = 'ParticipantNotFoundError';
    this.message = 'Participant not found';
  }
}

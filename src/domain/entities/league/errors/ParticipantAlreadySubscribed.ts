export class ParticipantAlreadySubscribed extends Error {
  constructor() {
    super('Participant already subscribed');
    this.name = 'ParticipantAlreadySubscribed';
  }
}

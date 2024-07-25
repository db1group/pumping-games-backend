export class UserCannotAddOtherParticipants extends Error {
  constructor() {
    super(
      'You cannot add other participants because you are not part of the team',
    );
    this.name = 'UserCannotAddOtherParticipants';
  }
}

import { User } from '../user/user';
import { Id } from '../../value-objects/id';
import { UserName } from '../../value-objects/user-name';
import { Email } from 'src/domain/value-objects/email';

export class Participant {
  public id: string;
  readonly name: UserName;
  readonly email: Email;
  readonly owner?: boolean;

  constructor(participantInput: User, owner?: boolean) {
    this.id = new Id(participantInput.id).toString();
    this.name = participantInput.name;
    this.email = participantInput.email;
    this.owner = owner || false;
  }

  static restoreFromDatabase(participantInput: ParticipantDatabaseInput) {
    const user = new User({
      id: participantInput.user.id,
      email: participantInput.user.email.getValue(),
      name: participantInput.user.name.getValue(),
    });
    return new Participant(user, participantInput.owner);
  }
}

export type ParticipantInput = {
  id?: string;
  name: string;
  email: string;
};

export type ParticipantDatabaseInput = {
  id: string;
  user: User;
  owner: boolean;
};

export enum ParticipantStatus {
  PENDING = 'PENDING',
  ACCEPT = 'ACCEPT',
  REJECTED = 'REJECTED',
}

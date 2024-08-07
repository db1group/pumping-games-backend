import { User } from '../user/user';
import { Id } from '../../value-objects/id';
import { UserName } from '../../value-objects/user-name';
import { Email } from 'src/domain/value-objects/email';

export class Participant {
  public id: string;
  readonly name: UserName;
  readonly email: Email;
  readonly owner?: boolean;
  private status: ParticipantStatus;

  constructor(participantInput: User, owner?: boolean) {
    this.id = new Id(participantInput.id.toString()).toString();
    this.name = participantInput.name;
    this.email = participantInput.email;
    this.owner = owner || false;
    this.status = ParticipantStatus.ACCEPT;
  }

  getStatus(): ParticipantStatus {
    return this.status;
  }

  accept(): void {
    this.status = ParticipantStatus.ACCEPT;
  }

  reject(): void {
    this.status = ParticipantStatus.REJECTED;
  }
}

export type ParticipantInput = {
  id?: string;
  name: string;
  players: User[];
};

export enum ParticipantStatus {
  PENDING = 'PENDING',
  ACCEPT = 'ACCEPT',
  REJECTED = 'REJECTED',
}

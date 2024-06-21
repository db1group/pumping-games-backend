import { User } from '../user/user';
import { Id } from '../../value-objects/id';
import { Logo } from '../../value-objects/logo';
import { UserName } from '../../value-objects/user-name';
import { Email } from 'src/domain/value-objects/email';

export class Participant {
  public id: string;
  readonly name: UserName;
  readonly email: Email;
  readonly photo: Logo;
  readonly owner?: boolean;
  private status: ParticipantStatus;

  constructor(participantInput: User, owner?: boolean) {
    this.id = participantInput.id ?? new Id().toString();
    this.name = participantInput.name;
    this.email = participantInput.email;
    this.photo = new Logo(participantInput.avatar.getValue());
    this.owner = owner || false;
    this.status = ParticipantStatus.PENDING;
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
  logo: Buffer;
  players: User[];
};

export enum ParticipantStatus {
  PENDING = 'PENDING',
  ACCEPT = 'ACCEPT',
  REJECTED = 'REJECTED',
}

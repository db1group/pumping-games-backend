import { Participant, ParticipantStatus } from '../participant/participant';
import { User } from '../user/user';
import { Id } from '../../value-objects/id';
import { Logo } from '../../value-objects/logo';
import { TeamName } from '../../value-objects/team-name';
import { CannotAddParticipantOnDeletedTeamError } from './errors/CannotAddParticipantOnDeletedTeamError';
import { CannotConfirmDeletedTeamError } from './errors/CannotConfirmDeletedTeamError';
import { NotEnoughParticipantsOnTeamError } from './errors/NotParticipantsOnTeamError';

export class Team {
  public id: string;
  private name: TeamName;
  private logo: Logo;
  private participants: Participant[];
  private status: TeamStatus;

  constructor(teamInput: TeamInput) {
    this.id = teamInput.id ?? new Id().toString();
    this.name = new TeamName(teamInput.name);
    this.logo = teamInput.logo ? new Logo(teamInput.logo) : null;
    this.participants = teamInput.players || [];
    this.status = TeamStatus.PENDING;
  }

  getName(): string {
    return this.name.getValue();
  }

  getLogo(): string {
    return this.logo.getValue();
  }

  getConfirmedParticipants(): Participant[] {
    return this.participants.filter(
      (participant) => participant.getStatus() === ParticipantStatus.ACCEPT,
    );
  }

  confirmTeam() {
    if (this.status === TeamStatus.DELETED) {
      throw new CannotConfirmDeletedTeamError();
    }
    if (this.getConfirmedParticipants().length < 2) {
      throw new NotEnoughParticipantsOnTeamError();
    }
    this.status = TeamStatus.ACTIVE;
  }

  getParticipants(): Participant[] {
    return this.participants;
  }

  addParticipant(user: User) {
    const isOwner = this.participants.length === 0;
    const participant = new Participant(user, isOwner);
    if (this.status === TeamStatus.DELETED) {
      throw new CannotAddParticipantOnDeletedTeamError();
    }

    this.participants.push(participant);
  }

  deleteTeam() {
    this.status = TeamStatus.DELETED;
  }
}

export type TeamInput = {
  id?: string;
  name: string;
  logo: string;
  players?: Participant[];
};

export enum TeamStatus {
  PENDING = 'pending',
  DELETED = 'deleted',
  ACTIVE = 'active',
}

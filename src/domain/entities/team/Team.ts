import { Participant } from '../participant/participant';
import { User } from '../user/user';
import { Id } from '../../value-objects/id';
import { Logo } from '../../value-objects/logo';
import { TeamName } from '../../value-objects/team-name';
import { CannotAddParticipantOnDeletedTeamError } from './errors/CannotAddParticipantOnDeletedTeamError';
import { CannotConfirmDeletedTeamError } from './errors/CannotConfirmDeletedTeamError';
import { UserAlreadyOnTeam } from './errors/UserAlreadyOnTeam';
import { UserCannotAddOtherParticipants } from './errors/UserCannotAddOtherParticipants';

export class Team {
  public id: string;
  readonly name: TeamName;
  readonly logo: Logo;
  readonly participants: Participant[];
  private status: TeamStatus;

  constructor(teamInput: TeamInput) {
    this.id = new Id(teamInput.id).toString();
    this.name = new TeamName(teamInput.name);
    this.logo = new Logo(teamInput.logo);
    this.participants = teamInput.players || [];
    this.status = teamInput.status ?? TeamStatus.PENDING;
  }

  static restoreFromDatabase(teamInput: TeamInput, status: string) {
    const team = new Team(teamInput);
    team.status = status as TeamStatus;
    return team;
  }

  confirmTeam() {
    if (this.status === TeamStatus.DELETED) {
      throw new CannotConfirmDeletedTeamError();
    }

    this.status = TeamStatus.ACTIVE;
  }

  getParticipants(): Participant[] {
    return this.participants;
  }

  private userCanAddOtherParticipants(requestedBy: User): boolean {
    const userIsOwner = this.participants.find(
      (participant) => participant.id === requestedBy.id,
    );
    return userIsOwner?.owner;
  }

  private participantIsAlreadyOnTeam(user: User): boolean {
    return this.participants.some((participant) => participant.id === user.id);
  }

  addOwnerOfTheTeam(userToAdd: User) {
    const isFirstParticipant = this.participants.length === 0;

    if (!isFirstParticipant) {
      throw new Error('Team already has participants');
    }
    const isOwner = true;
    const participant = new Participant(userToAdd, isOwner);
    this.participants.push(participant);
  }

  addParticipant(userToAdd: User, requestedBy: User) {
    if (this.status === TeamStatus.DELETED) {
      throw new CannotAddParticipantOnDeletedTeamError();
    }

    if (!this.participants.length) {
      this.addOwnerOfTheTeam(userToAdd);
      return;
    }

    if (this.participantIsAlreadyOnTeam(userToAdd)) {
      throw new UserAlreadyOnTeam();
    }

    if (!this.userCanAddOtherParticipants(requestedBy)) {
      throw new UserCannotAddOtherParticipants();
    }

    this.participants.push(new Participant(userToAdd));
  }

  getStatus(): TeamStatus {
    return this.status;
  }

  deleteTeam() {
    this.status = TeamStatus.DELETED;
  }
}

export type TeamInput = {
  id?: string;
  name: string;
  logo?: string;
  status?: TeamStatus;
  players?: Participant[];
};

export enum TeamStatus {
  PENDING = 'PENDING',
  DELETED = 'DELETED',
  ACTIVE = 'ACTIVE',
}

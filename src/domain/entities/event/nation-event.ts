import { EventName } from 'src/domain/value-objects/event-name';
import { EventStatus } from './event-status';
import { Logo } from 'src/domain/value-objects/logo';
import { Season } from 'src/domain/value-objects/season';
import { CannotFinishNotInProgressEventError } from './errors/CannotFinishNotInProgressEventError';
import { CannotCancelFinishedEventError } from './errors/CannotCancelFinishedEventError';
import { Team, TeamInput } from '../team/Team';
import { TeamLeague, TeamLeagueInput } from '../league/team-league';
import { Id } from 'src/domain/value-objects/id';
import { User } from '../user/user';
import { CannotAddParticipantIsAlreadyAnotherTeamError } from './errors/CannotAddParticipantIsAlreadyAnotherTeamError';

export class NationEvent {
  readonly id: string;
  private name: EventName;
  private status: EventStatus;
  readonly logo?: Logo | null = null;
  readonly season: Season | null = null;
  readonly leagues: TeamLeague[] = [];
  readonly nations: Team[] = [];

  constructor(input: NationEventInput) {
    this.id = new Id(input.id).toString();
    this.name = new EventName(input.name);
    this.status = input.status;
    this.logo = new Logo(input.logo);
    this.season = new Season(input.season);
    this.leagues = input.leagues?.map((league) => new TeamLeague(league)) || [];
    this.nations =
      input.nations?.map((team: TeamInput) => new Team(team)) || [];
  }

  static restoreFromDatabase(eventInput: NationEventDatabaseModel) {
    return new NationEvent({
      id: eventInput.id,
      name: eventInput.name,
      status: eventInput.status as EventStatus,
      logo: eventInput.logo_url,
      season: eventInput.season,
    });
  }

  getName() {
    return this.name.getValue();
  }

  addNation(team: Team) {
    this.nations.push(team);
  }

  removeNation(team: Team) {
    const teamIndex = this.nations.findIndex((t) => t === team);
    if (teamIndex === -1) {
      return;
    }
    this.nations.splice(teamIndex, 1);
  }

  getStatus() {
    return this.status;
  }

  addLeague(league: TeamLeague) {
    if (this.status === EventStatus.FINISHED) {
      throw new CannotCancelFinishedEventError();
    }
    this.leagues.push(league);
  }

  addParticipant(nationId: string, participantToAdd: User, requestedBy: User) {
    const team = this.nations.find((t) => t.id === nationId);
    const participantIsAlreadyInOtherTeam = this.nations.some((t) =>
      t.getParticipants().some((p) => p.id === participantToAdd.id),
    );

    if (participantIsAlreadyInOtherTeam) {
      throw new CannotAddParticipantIsAlreadyAnotherTeamError();
    }

    return team.addParticipant(participantToAdd, requestedBy);
  }

  removeLeague(league: TeamLeague) {
    if (this.status === EventStatus.FINISHED) {
      throw new CannotCancelFinishedEventError();
    }
    const leagueIndex = this.leagues.findIndex((l) => l === league);
    if (leagueIndex === -1) {
      return;
    }
    this.leagues.splice(leagueIndex, 1);
  }

  changeName(name: string) {
    this.name = new EventName(name);
  }

  cancelEvent() {
    if (this.status === EventStatus.FINISHED) {
      throw new CannotCancelFinishedEventError();
    }

    this.status = EventStatus.CANCELLED;
  }

  finishEvent() {
    if (this.status === EventStatus.IN_PROGRESS) {
      this.status = EventStatus.FINISHED;
      return;
    }
    throw new CannotFinishNotInProgressEventError();
  }

  getLeagues() {
    return this.leagues;
  }

  getNations() {
    return this.nations;
  }
}

export interface NationEventInput {
  id?: string;
  name: string;
  status: EventStatus;
  logo?: string;
  season?: string;
  leagues?: TeamLeagueInput[];
  nations?: TeamInput[];
}

export type NationEventDatabaseModel = {
  id: string;
  name: string;
  status: string;
  logo_url: string;
  season: string;
  created_at?: Date;
  updated_at?: Date;
};

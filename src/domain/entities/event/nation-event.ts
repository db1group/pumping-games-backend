import { EventName } from 'src/domain/value-objects/event-name';
import { EventStatus } from './event-status';
import { Logo } from 'src/domain/value-objects/logo';
import { Season } from 'src/domain/value-objects/season';
import { CannotFinishNotInProgressEventError } from './errors/CannotFinishNotInProgressEventError';
import { CannotCancelFinishedEventError } from './errors/CannotCancelFinishedEventError';
import { Team } from '../team/Team';
import { TeamLeague, TeamLeagueInput } from '../league/team-league';
import { Id } from 'src/domain/value-objects/id';

export class NationEvent {
  readonly id: string;
  private name: EventName;
  private status: EventStatus;
  readonly logo?: Logo | null = null;
  readonly season: Season | null = null;
  readonly leagues: TeamLeague[] = [];
  readonly teams: Team[] = [];

  constructor(input: NationEventInput) {
    this.id = new Id(input.id).toString();
    this.name = new EventName(input.name);
    this.status = input.status;
    this.logo = new Logo(input.logo);
    this.season = new Season(input.season);
  }

  getName() {
    return this.name.getValue();
  }

  addNation(team: Team) {
    this.teams.push(team);
  }

  removeTeam(team: Team) {
    const teamIndex = this.teams.findIndex((t) => t === team);
    if (teamIndex === -1) {
      return;
    }
    this.teams.splice(teamIndex, 1);
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
}

export interface NationEventInput {
  id?: string;
  name: string;
  status: EventStatus;
  logo?: string;
  season?: string;
  leagues?: TeamLeagueInput[];
}

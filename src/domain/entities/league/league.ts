import { LeagueName } from '../../value-objects/league-name';
import { Logo } from '../../value-objects/logo';
import { Season } from '../../value-objects/season';
import { LeagueStatus } from './league-status';
import { CannotChangeNameError } from './errors/CannotChangeNameError';
import { CannotCancelFinishedLeagueError } from './errors/CannotCancelFinishedLeagueError';
import { CannotFinishNotInProgressLeagueError } from './errors/CannotFinishNotInProgressLeagueError';
import { Id } from 'src/domain/value-objects/id';

export abstract class League {
  public readonly id: string;
  protected name: LeagueName;
  protected logo: Logo;
  protected season: Season;
  protected status: LeagueStatus;

  constructor(league: LeagueInput) {
    this.id = new Id(league.id).toString();
    this.name = new LeagueName(league.name);
    this.logo = new Logo(league.logo);
    this.season = new Season(league.season);
    this.status = LeagueStatus.ACTIVE;
  }

  abstract getLeague();

  abstract startLeague();

  getName() {
    return this.name.getValue();
  }

  getLogo() {
    return this.logo.getValue();
  }

  getSeason() {
    return this.season.getValue();
  }

  getStatus() {
    return this.status;
  }

  addLogo(logo: string) {
    this.logo = new Logo(logo);
  }

  removeLogo() {
    this.logo = null;
  }

  setSeason(season: string) {
    this.season = new Season(season);
  }

  changeName(name: string) {
    if (this.status === LeagueStatus.FINISHED) {
      throw new CannotChangeNameError(LeagueStatus.FINISHED);
    }

    if (this.status === LeagueStatus.IN_PROGRESS) {
      throw new CannotChangeNameError(LeagueStatus.IN_PROGRESS);
    }

    if (this.status === LeagueStatus.CANCELLED) {
      throw new CannotChangeNameError(LeagueStatus.CANCELLED);
    }

    this.name = new LeagueName(name);
  }

  cancelLeague() {
    if (this.status === LeagueStatus.FINISHED) {
      throw new CannotCancelFinishedLeagueError();
    }

    this.status = LeagueStatus.CANCELLED;
  }

  finishLeague() {
    if (this.status === LeagueStatus.IN_PROGRESS) {
      this.status = LeagueStatus.FINISHED;
      return;
    }
    throw new CannotFinishNotInProgressLeagueError();
  }
}

export type LeagueInput = {
  id?: string;
  name: string;
  logo: string;
  season: string;
};

export type LeagueOutput = {
  id: string;
  name: string;
  logo: string;
  season: string;
  status: LeagueStatus;
};

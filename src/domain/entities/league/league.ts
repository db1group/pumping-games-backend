import { Ranking, RankingInput } from '../ranking/ranking';
import { LeagueName } from '../../value-objects/league-name';
import { Logo } from '../../value-objects/logo';
import { Season } from '../../value-objects/season';
import { LeagueStatus } from './league-status';
import {
  LeagueFormEvidence,
  LeagueFormEvidenceInput,
} from './league-form-evidence';
import { LeagueNotInProgressError } from './errors/LeagueNotInProgressError';
import { CannotChangeNameError } from './errors/CannotChangeNameError';
import { CannotCancelFinishedLeagueError } from './errors/CannotCancelFinishedLeagueError';
import { CannotFinishNotInProgressLeagueError } from './errors/CannotFinishNotInProgressLeagueError';
import { Id } from 'src/domain/value-objects/id';

export abstract class League {
  protected id: Id;
  protected name: LeagueName;
  protected logo: Logo;
  protected season: Season;
  protected status: LeagueStatus;
  protected leagueFormEvidence: LeagueFormEvidence;
  protected ranking: Ranking;

  constructor(league: LeagueInput) {
    this.id = league.id ? new Id(league.id) : new Id();
    this.name = new LeagueName(league.name);
    this.logo = new Logo(league.logo);
    this.season = new Season(league.season);
    this.status = LeagueStatus.ACTIVE;
    this.leagueFormEvidence = new LeagueFormEvidence(league.formEvidence);
  }

  abstract getLeague();

  abstract startLeague();

  addRanking(ranking: RankingInput) {
    if (this.status === LeagueStatus.IN_PROGRESS) {
      this.ranking = new Ranking(ranking);
      return;
    }

    throw new LeagueNotInProgressError();
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

  setSeason(season: number) {
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

  changeFormEvidenceName(name: string) {
    this.leagueFormEvidence.changeName(name);
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
  season: number;
  formEvidence: LeagueFormEvidenceInput;
};

export type LeagueOutput = {
  name: string;
  logo: string;
  season: number;
  status: LeagueStatus;
};

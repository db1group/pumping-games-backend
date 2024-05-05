import { Ranking, RankingInput } from '../ranking/ranking';
import { Team, TeamInput } from '../teams/team';
import { LeagueMaxTeams } from '../value-objects/league-max-teams';
import { LeagueMinTeams } from '../value-objects/league-min-teams';
import { LeagueName } from '../value-objects/league-name';
import { Logo } from '../value-objects/logo';
import { Season } from '../value-objects/season';
import { LeagueStatus } from './league-status';
import {
  LeagueFormEvidence,
  LeagueFormEvidenceInput,
} from './league-form-evidence';
import { NotEnoughTeamsError } from './errors/NotEnoughTeamsError';
import { LeagueNotInProgressError } from './errors/LeagueNotInProgressError';
import { LeagueAlreadyFinishedError } from './errors/LeagueAlreadyFinishedError';
import { LeagueAlreadyCancelledError } from './errors/LeagueAlreadyCancelledError';
import { CannotAddTeamToInProgressLeagueError } from './errors/CannotAddTeamToInProgressLeagueError';
import { TeamAlreadyExistsError } from './errors/TeamAlreadyExistsError';
import { MaxTeamsReachedError } from './errors/MaxTeamsReachedError';
import { CannotChangeNameError } from './errors/CannotChangeNameError';
import { CannotCancelFinishedLeagueError } from './errors/CannotCancelFinishedLeagueError';
import { CannotFinishNotInProgressLeagueError } from './errors/CannotFinishNotInProgressLeagueError';

export class League {
  private name: LeagueName;
  private logo: Logo;
  private season: Season;
  private teams: Team[];
  private status: LeagueStatus;
  private maxTeams: LeagueMaxTeams;
  private minTeams: LeagueMinTeams;
  private leagueFormEvidence: LeagueFormEvidence;
  private ranking: Ranking;

  constructor(league: LeagueInput) {
    this.name = new LeagueName(league.name);
    this.logo = new Logo(league.logo);
    this.season = new Season(league.season);
    this.teams = league.teams;
    this.status = LeagueStatus.ACTIVE;
    this.maxTeams = new LeagueMaxTeams(league.maxTeams);
    this.minTeams = new LeagueMinTeams(league.minTeams);
    this.leagueFormEvidence = new LeagueFormEvidence(league.formEvidence);
  }

  startLeague() {
    if (this.teams.length < this.minTeams.getValue()) {
      throw new NotEnoughTeamsError();
    }
    this.status = LeagueStatus.IN_PROGRESS;
  }

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

  addTeam(team: TeamInput) {
    if (this.status === LeagueStatus.FINISHED) {
      throw new LeagueAlreadyFinishedError();
    }
    if (this.status === LeagueStatus.CANCELLED) {
      throw new LeagueAlreadyCancelledError();
    }
    if (this.status === LeagueStatus.IN_PROGRESS) {
      throw new CannotAddTeamToInProgressLeagueError();
    }
    if (this.teams.find((t) => t.id === team.id)) {
      throw new TeamAlreadyExistsError();
    }

    if (this.teams.length >= this.maxTeams.getValue()) {
      throw new MaxTeamsReachedError();
    }
    this.teams.push(new Team(team));
  }

  removeTeam(teamId: string) {
    this.teams = this.teams.filter((team) => team.id !== teamId);
  }

  addLogo(logo: Buffer) {
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

  getLeague(): LeagueOutput {
    return {
      name: this.name.getValue(),
      logo: this.logo?.getValue(),
      season: this.season.getValue(),
      teams: this.teams,
      status: this.status,
    };
  }
}

export type LeagueInput = {
  name: string;
  logo: Buffer;
  season: number;
  teams: Team[];
  minTeams: number;
  maxTeams: number;
  formEvidence: LeagueFormEvidenceInput;
};

export type LeagueOutput = {
  name: string;
  logo: Buffer;
  season: number;
  teams: Team[];
  status: LeagueStatus;
};

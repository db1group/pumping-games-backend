import { LeagueMaxTeams } from '../../value-objects/league-max-teams';
import { LeagueMinTeams } from '../../value-objects/league-min-teams';
import { LeagueName } from '../../value-objects/league-name';
import { LeagueStatus } from './league-status';
import { NotEnoughTeamsError } from './errors/NotEnoughTeamsError';
import { LeagueAlreadyFinishedError } from './errors/LeagueAlreadyFinishedError';
import { LeagueAlreadyCancelledError } from './errors/LeagueAlreadyCancelledError';
import { CannotAddTeamToInProgressLeagueError } from './errors/CannotAddTeamToInProgressLeagueError';
import { TeamAlreadyExistsError } from './errors/TeamAlreadyExistsError';
import { MaxTeamsReachedError } from './errors/MaxTeamsReachedError';
import { CannotChangeNameError } from './errors/CannotChangeNameError';
import { CannotCancelFinishedLeagueError } from './errors/CannotCancelFinishedLeagueError';
import { CannotFinishNotInProgressLeagueError } from './errors/CannotFinishNotInProgressLeagueError';
import { League, LeagueInput, LeagueOutput } from './league';

import { Team } from '../team/Team';

export class TeamLeague extends League {
  private teams: Team[];
  private maxTeams: LeagueMaxTeams;
  private minTeams: LeagueMinTeams;

  constructor(league: TeamLeagueInput) {
    super(league);
    this.teams = [];

    this.minTeams = new LeagueMinTeams(league.minTeams);
    this.maxTeams = new LeagueMaxTeams(league.maxTeams, this.minTeams);
  }

  static restoreFromDatabase(league: TeamLeagueInput) {
    return new TeamLeague(league);
  }

  getTeams() {
    return this.teams;
  }

  getMinTeams() {
    return this.minTeams.getValue();
  }

  getMaxTeams() {
    return this.maxTeams.getValue();
  }

  startLeague() {
    if (this.teams.length <= this.minTeams.getValue()) {
      throw new NotEnoughTeamsError();
    }
    this.status = LeagueStatus.IN_PROGRESS;
  }

  getStatus() {
    return this.status;
  }

  addTeam(team: Team) {
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
    this.teams.push(team);
  }

  removeTeam(teamId: string) {
    this.teams = this.teams.filter((team) => team.id !== teamId);
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

  getLeague(): TeamLeagueOutput {
    return {
      id: this.id,
      name: this.name.getValue(),
      logo: this.logo?.getValue(),
      season: this.season.getValue(),
      teams: this.teams,
      status: this.status,
      minTeams: this.minTeams.getValue(),
      maxTeams: this.maxTeams.getValue(),
    };
  }
}

export interface TeamLeagueInput extends LeagueInput {
  minTeams: number;
  maxTeams: number;
}

export interface TeamLeagueOutput extends LeagueOutput {
  teams: Team[];
  minTeams: number;
  maxTeams: number;
}

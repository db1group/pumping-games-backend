import { LeagueMinTeams } from './league-min-teams';

export class LeagueMaxTeams {
  constructor(
    private readonly maxTeams: number,
    private readonly minTeams: LeagueMinTeams,
  ) {
    if (!maxTeams) {
      throw new Error('Max teams is required');
    }
    if (maxTeams < 1) {
      throw new Error('Max teams should be at least 1');
    }
    if (maxTeams > 9999) {
      throw new Error('Max teams should not exceed 9999');
    }
    if (maxTeams < this.minTeams.getValue()) {
      throw new Error('Max teams should be greater than min teams');
    }
  }

  getValue() {
    return this.maxTeams;
  }
}

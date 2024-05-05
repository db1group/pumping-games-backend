export class LeagueMaxTeams {
  constructor(private maxTeams: number) {
    if (!maxTeams) {
      throw new Error('Max teams is required');
    }
    if (maxTeams < 1) {
      throw new Error('Max teams should be at least 1');
    }
    if (maxTeams > 9999) {
      throw new Error('Max teams should not exceed 9999');
    }
  }

  getValue() {
    return this.maxTeams;
  }
}

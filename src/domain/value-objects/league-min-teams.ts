export class LeagueMinTeams {
  constructor(private minTeams: number) {
    if (!minTeams) {
      throw new Error('Min teams is required');
    }
    if (minTeams < 1) {
      throw new Error('Min teams should be at least 1');
    }
    if (minTeams > 9999) {
      throw new Error('Min teams should not exceed 9999');
    }
  }

  getValue() {
    return this.minTeams;
  }
}

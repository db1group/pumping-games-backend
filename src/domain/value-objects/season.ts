export class Season {
  constructor(private season: number) {
    if (!season) {
      throw new Error('Season is required');
    }
    if (season < 1) {
      throw new Error('Season should be at least 1');
    }
    if (season > 9999) {
      throw new Error('Season should not exceed 9999');
    }
  }

  getValue() {
    return this.season;
  }
}

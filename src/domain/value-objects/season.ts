export class Season {
  constructor(private season: string) {
    if (!season) {
      throw new Error('Season is required');
    }

    if (season.length > 255) {
      throw new Error('Season cannot be longer than 255 characters');
    }
  }

  getValue() {
    return this.season;
  }
}

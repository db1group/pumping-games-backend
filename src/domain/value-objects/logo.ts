export class Logo {
  constructor(private logo: string) {
    if (!logo) {
      throw new Error('Logo is required');
    }
  }

  getValue() {
    return this.logo;
  }
}

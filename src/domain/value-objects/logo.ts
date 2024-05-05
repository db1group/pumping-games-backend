export class Logo {
  constructor(private logo: Buffer) {
    if (!logo) {
      throw new Error('Logo is required');
    }
  }

  getValue() {
    return this.logo;
  }
}

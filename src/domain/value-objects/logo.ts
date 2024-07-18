export class Logo {
  private readonly logo: string;

  constructor(logo: string = '') {
    this.logo = logo;
  }

  getValue() {
    return this.logo;
  }
}

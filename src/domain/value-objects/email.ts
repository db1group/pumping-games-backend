export class Email {
  constructor(private email: string) {
    if (!email) {
      throw new Error('Email is required');
    }
    if (!this.isValidEmail(email)) {
      throw new Error('Email is invalid');
    }
  }

  getValue() {
    return this.email;
  }

  private isValidEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}

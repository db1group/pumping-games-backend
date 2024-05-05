import { Email } from '../value-objects/email';
import { Logo } from '../value-objects/logo';
import { UserName } from '../value-objects/user-name';

export class User {
  private id: string;
  private email: Email;
  private name: UserName;
  private avatar: Logo;
  private roles: string[];

  constructor(private readonly userInput: UserInput) {
    this.id = userInput.id;
    this.email = new Email(userInput.email);
    this.name = new UserName(userInput.name);
    this.avatar = new Logo(userInput.avatar);
    this.roles = userInput.roles;
  }
}

export type UserInput = {
  id: string;
  email: string;
  name: string;
  avatar: Buffer;
  roles: string[];
};

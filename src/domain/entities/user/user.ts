import { Email } from '../../value-objects/email';
import { UserName } from '../../value-objects/user-name';

export class User {
  readonly id: string;
  readonly email: Email;
  readonly name: UserName;
  readonly roles: string[];

  constructor(userInput: UserInput) {
    this.id = userInput.id;
    this.email = new Email(userInput.email);
    this.name = new UserName(userInput.name);
    this.roles = userInput.roles;
  }
}

export type UserInput = {
  id: string;
  email: string;
  name: string;
  roles: string[];
};

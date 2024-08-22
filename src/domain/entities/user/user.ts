import { Id } from 'src/domain/value-objects/id';
import { Email } from '../../value-objects/email';
import { UserName } from '../../value-objects/user-name';

export class User {
  readonly id: string;
  readonly email: Email;
  readonly name: UserName;
  private roles: string[];
  readonly authProviderId: string;

  constructor(userInput: UserInput) {
    this.id = new Id(userInput.id).toString();
    this.email = new Email(userInput.email);
    this.name = new UserName(userInput.name);
    this.roles = userInput.roles || [];
    this.authProviderId = userInput.authProviderId;
  }

  static restoreFromDatabase(userInput: UserDatabaseInput) {
    return new User({
      id: userInput.id,
      email: userInput.email,
      name: userInput.name,
      authProviderId: userInput.authProviderId,
    });
  }

  getRoles() {
    return this.roles;
  }

  setRoles(roles: string[]) {
    if (this.roles.length) return;
    this.roles = roles;
  }
}

export type UserDatabaseInput = {
  id: string;
  email: string;
  name: string;
  authProviderId?: string;
};

export type UserInput = {
  id?: string;
  email: string;
  name: string;
  roles?: string[];
  authProviderId?: string;
};

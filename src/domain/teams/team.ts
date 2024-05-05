import { User } from '../user/user';
import { Id } from '../value-objects/id';
import { Logo } from '../value-objects/logo';
import { TeamName } from '../value-objects/team-name';

export class Team {
  public id: string;
  private name: TeamName;
  private logo: Logo;
  private participants: User[];

  constructor(teamInput: TeamInput) {
    this.id = teamInput.id ?? new Id().toString();
    this.name = new TeamName(teamInput.name);
    this.logo = new Logo(teamInput.logo);
    this.participants = teamInput.players;
  }
}

export type TeamInput = {
  id?: string;
  name: string;
  logo: Buffer;
  players: User[];
};

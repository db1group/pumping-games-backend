import { Team } from 'src/domain/teams/team';
import { UserRepository } from '../repositories/user.repository';
import { User } from 'src/domain/user/user';
import { TeamRepository } from '../repositories/team.repository';

export class CreateTeam {
  constructor(
    private readonly teamRepository: TeamRepository,
    private readonly userRepository: UserRepository,
  ) {}

  private async getPlayers(players: string[]): Promise<User[]> {
    return this.userRepository.getListOfUsers(players);
  }

  async execute(createTeamDTO: CreateTeamDTO): Promise<void> {
    const players = await this.getPlayers(createTeamDTO.players);

    const team = new Team({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
      players: players,
    });

    return this.teamRepository.createTeam(team);
  }
}

export type CreateTeamDTO = {
  name: string;
  description: string;
  leagueId: string;
  userId: string;
  logo: Buffer;
  players: string[];
};

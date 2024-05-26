import { Team } from 'src/domain/entities/team/Team';
import { UserRepository } from '../../repositories/user.repository';
import { User } from 'src/domain/entities/user/user';
import { TeamRepository } from '../../repositories/team.repository';

export class CreateTeam {
  constructor(
    private readonly teamRepository: TeamRepository,
    private readonly userRepository: UserRepository,
  ) {}

  private addOwnerToTeam(team: Team, user: User): void {
    team.addParticipant(user);
  }

  async execute(createTeamDTO: CreateTeamDTO): Promise<void> {
    const user = await this.userRepository.findUserById(createTeamDTO.userId);

    const team = new Team({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
    });

    this.addOwnerToTeam(team, user);

    return this.teamRepository.createTeam(team);
  }
}

export type CreateTeamDTO = {
  name: string;
  description: string;
  leagueId: string;
  userId: string;
  logo: Buffer;
};

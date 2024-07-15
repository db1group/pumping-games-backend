import { Team } from 'src/domain/entities/team/Team';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
import { User } from 'src/domain/entities/user/user';
import {
  TEAM_REPOSITORY,
  TeamRepository,
} from '../../repositories/team.repository';
import { Inject } from '@nestjs/common';

export class CreateTeam {
  constructor(
    @Inject(TEAM_REPOSITORY)
    private readonly teamRepository: TeamRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  private addOwnerToTeam(team: Team, user: User): void {
    team.addParticipant(user);
  }

  async execute(createTeamDTO: CreateTeamInput): Promise<void> {
    const user = await this.userRepository.findUserById(createTeamDTO.userId);
    console.log('user', user);

    const team = new Team({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
    });

    this.addOwnerToTeam(team, user);

    return this.teamRepository.createTeam(team);
  }
}

export type CreateTeamInput = {
  name: string;
  description?: string;
  userId?: string;
  logo?: string;
};

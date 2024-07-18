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
import {
  BUCKET_SERVICE,
  BucketService,
} from 'src/application/services/bucket.service';

export class CreateTeam {
  constructor(
    @Inject(TEAM_REPOSITORY)
    private readonly teamRepository: TeamRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(BUCKET_SERVICE)
    private readonly bucketService: BucketService,
  ) {}

  private addOwnerToTeam(team: Team, user: User): void {
    team.addParticipant(user);
  }

  async execute(createTeamDTO: CreateTeamInput): Promise<void> {
    const user = await this.userRepository.findUserById(createTeamDTO.userId);
    const logo = await this.uploadLogo(createTeamDTO.logo);

    const team = new Team({
      name: createTeamDTO.name,
      logo,
    });

    this.addOwnerToTeam(team, user);

    return this.teamRepository.createTeam(team);
  }

  private async uploadLogo(logo: string): Promise<string> {
    if (!logo) {
      return null;
    }
    return this.bucketService.uploadFile(logo);
  }
}

export type CreateTeamInput = {
  name: string;
  description?: string;
  userId?: string;
  logo?: string;
};

import { Team } from 'src/domain/entities/team/Team';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';
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

  async execute(createTeamDTO: CreateTeamInput): Promise<void> {
    const user = await this.userRepository.findUserById(createTeamDTO.userId);
    const logo = createTeamDTO.logo
      ? await this.bucketService.uploadFile(createTeamDTO.logo)
      : null;

    const team = new Team({
      name: createTeamDTO.name,
      logo,
    });

    team.addOwnerOfTheTeam(user);

    return this.teamRepository.createTeam(team);
  }
}

export type CreateTeamInput = {
  name: string;
  description?: string;
  userId?: string;
  logo?: string;
};

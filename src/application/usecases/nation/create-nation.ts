import { Team } from 'src/domain/entities/team/Team';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';

import { Inject } from '@nestjs/common';
import {
  BUCKET_SERVICE,
  BucketService,
} from 'src/application/services/bucket.service';
import {
  NATION_REPOSITORY,
  NationRepository,
} from 'src/application/repositories/nation.repository';

export class CreateNation {
  constructor(
    @Inject(NATION_REPOSITORY)
    private readonly nationRepository: NationRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
    @Inject(BUCKET_SERVICE)
    private readonly bucketService: BucketService,
  ) {}

  async execute(
    createTeamDTO: CreateNationInput,
    nationEventId: string,
  ): Promise<void> {
    const user = await this.userRepository.findUserById(createTeamDTO.userId);
    const logo = createTeamDTO.logo
      ? await this.bucketService.uploadFile(createTeamDTO.logo)
      : null;

    const team = new Team({
      name: createTeamDTO.name,
      logo,
    });

    team.addOwnerOfTheTeam(user);

    return this.nationRepository.createNation(team, nationEventId);
  }
}

export type CreateNationInput = {
  name: string;
  userId?: string;
  logo?: string;
};

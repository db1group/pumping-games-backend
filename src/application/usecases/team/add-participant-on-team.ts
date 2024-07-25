import { Inject } from '@nestjs/common';
import {
  TEAM_REPOSITORY,
  TeamRepository,
} from '../../repositories/team.repository';
import {
  USER_REPOSITORY,
  UserRepository,
} from '../../repositories/user.repository';

export class AddParticipantOnTeam {
  constructor(
    @Inject(TEAM_REPOSITORY)
    private readonly teamRepository: TeamRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(
    teamId: string,
    participantUserId: string,
    requestedByUser: string,
  ): Promise<void> {
    const team = await this.teamRepository.findTeamById(teamId);
    const user = await this.userRepository.findUserById(participantUserId);
    const requestedBy = await this.userRepository.findUserById(requestedByUser);

    team.addParticipant(user, requestedBy);

    return this.teamRepository.updateTeam(team);
  }
}

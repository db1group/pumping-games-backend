import { TeamRepository } from '../../repositories/team.repository';
import { UserRepository } from '../../repositories/user.repository';
import { SendRequestParticipationEmail } from '../send-request-participation/send-request-participation';

export class AddParticipantOnTeam {
  constructor(
    private readonly teamRepository: TeamRepository,
    private readonly userRepository: UserRepository,
    private readonly sendRequestTeamParticipation: SendRequestParticipationEmail,
  ) {}

  async execute(teamId: string, userId: string): Promise<void> {
    const team = await this.teamRepository.findTeamById(teamId);
    const user = await this.userRepository.findUserById(userId);
    await this.sendRequestTeamParticipation.sendRequest(user.email);

    team.addParticipant(user);

    return this.teamRepository.updateTeam(team);
  }
}

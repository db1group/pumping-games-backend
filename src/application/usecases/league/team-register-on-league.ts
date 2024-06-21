import { LeagueRepository } from 'src/application/repositories/league.repository';
import { TeamRepository } from 'src/application/repositories/team.repository';
import { TeamLeague } from 'src/domain/entities/league/team-league';
import { SendRequestParticipationEmail } from '../send-request-participation/send-request-participation';
import { Team } from 'src/domain/entities/team/Team';
import { Participant } from 'src/domain/entities/participant/participant';

export class TeamRegisterOnLeague {
  constructor(
    private leagueRepository: LeagueRepository<TeamLeague>,
    private teamRepository: TeamRepository,
    private sendRequestParticipationEmail: SendRequestParticipationEmail,
  ) {}

  async execute(leagueId: string, teamId: string): Promise<void> {
    const league = await this.leagueRepository.findById(leagueId);

    const team = await this.teamRepository.findTeamById(teamId);

    league.addTeam(team);

    await this.leagueRepository.save(league);
    await this.sendInvitationEmail(team);
  }

  private async sendInvitationEmail(team: Team) {
    const participants = team.getConfirmedParticipants();
    participants.forEach(async (participant: Participant) => {
      await this.sendRequestParticipationEmail.sendRequest(participant.email);
    });
  }
}

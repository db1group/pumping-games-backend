import { ParticipantStatus } from 'src/domain/entities/participant/participant';
import { TeamRepository } from '../../repositories/team.repository';
import Queue from 'src/infra/queue/queue';
import { ParticipantAcceptedTeamEvent } from 'src/domain/events/participant-accepted-team.event';

export class ParticipantTeamJoin {
  constructor(
    private readonly teamRepository: TeamRepository,
    private readonly queueService: Queue,
  ) {}

  async execute(teamId: string, userId: string, status: string): Promise<void> {
    const team = await this.teamRepository.findTeamById(teamId);

    const participant = team
      .getParticipants()
      .find((participant) => participant.id === userId);

    if (!participant) {
      throw new Error('Participant not found');
    }

    if (status.toUpperCase() === ParticipantStatus.ACCEPT) {
      participant?.accept();
      const event = new ParticipantAcceptedTeamEvent(teamId);

      this.queueService.publish(event.name, event);
    }

    if (status.toUpperCase() === ParticipantStatus.REJECTED) {
      participant?.reject();
    }

    return this.teamRepository.updateTeam(team);
  }
}

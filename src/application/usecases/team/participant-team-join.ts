import { ParticipantStatus } from 'src/domain/entities/participant/participant';
import {
  TEAM_REPOSITORY,
  TeamRepository,
} from '../../repositories/team.repository';
import { Inject } from '@nestjs/common';
import { ParticipantNotFoundError } from '../errors/participant-not-found.error';

export class ParticipantTeamJoin {
  constructor(
    @Inject(TEAM_REPOSITORY)
    private readonly teamRepository: TeamRepository,
  ) {}

  async execute(teamId: string, userId: string, status: string): Promise<void> {
    const team = await this.teamRepository.findTeamById(teamId);

    const participant = team
      .getParticipants()
      .find((participant) => participant.id === userId);

    if (!participant) {
      throw new ParticipantNotFoundError();
    }

    if (status.toUpperCase() === ParticipantStatus.ACCEPT) {
      participant?.accept();
    }

    if (status.toUpperCase() === ParticipantStatus.REJECTED) {
      participant?.reject();
    }

    return this.teamRepository.updateTeam(team);
  }
}

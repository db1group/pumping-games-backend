import {
  fakeTeam,
  fakeUser,
  mockQueueFactoryQueue,
  mockTeamRepositoryFactory,
} from '../test-utils';
import { ParticipantTeamJoin } from 'src/application/usecases/team/participant-team-join';
import Queue from 'src/infra/queue/queue';
import { ParticipantAcceptedTeamEvent } from 'src/domain/events/participant-accepted-team.event';

describe('Participant answer the invitation', () => {
  it('Should add some participant on team because it was accepted the invitation', async () => {
    const mockUser = fakeUser();
    const mockTeam = fakeTeam();

    const teamRepository = mockTeamRepositoryFactory(mockTeam);

    mockTeam.addParticipant(mockUser);

    const queueService: Queue = mockQueueFactoryQueue();

    const addParticipantOnTeamUseCase = new ParticipantTeamJoin(
      teamRepository,
      queueService,
    );
    await addParticipantOnTeamUseCase.execute(
      mockTeam.id,
      mockUser.id,
      'ACCEPT',
    );

    expect(mockTeam.getConfirmedParticipants().length).toBe(1);
  });

  it('Should send a event when participant accept the invitation', async () => {
    const mockUser = fakeUser();
    const mockTeam = fakeTeam();

    const teamRepository = mockTeamRepositoryFactory(mockTeam);

    mockTeam.addParticipant(mockUser);

    const queueService: Queue = mockQueueFactoryQueue();

    const addParticipantOnTeamUseCase = new ParticipantTeamJoin(
      teamRepository,
      queueService,
    );
    await addParticipantOnTeamUseCase.execute(
      mockTeam.id,
      mockUser.id,
      'ACCEPT',
    );

    const event = new ParticipantAcceptedTeamEvent(mockTeam.id);

    expect(queueService.publish).toHaveBeenCalledWith(event.name, event);
  });
});

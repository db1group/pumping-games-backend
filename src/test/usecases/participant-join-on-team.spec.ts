import { fakeTeam, fakeUser, mockTeamRepositoryFactory } from '../test-utils';
import { ParticipantTeamJoin } from 'src/application/usecases/team/participant-team-join';

describe('Participant answer the invitation', () => {
  it('Should add some participant on team because it was accepted the invitation', async () => {
    const mockUser = fakeUser();
    const mockTeam = fakeTeam();

    const teamRepository = mockTeamRepositoryFactory(mockTeam);

    mockTeam.addParticipant(mockUser);

    const addParticipantOnTeamUseCase = new ParticipantTeamJoin(teamRepository);
    await addParticipantOnTeamUseCase.execute(
      mockTeam.id,
      mockUser.id,
      'ACCEPT',
    );

    expect(mockTeam.getConfirmedParticipants().length).toBe(1);
  });
});

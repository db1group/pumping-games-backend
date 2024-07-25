import { AddParticipantOnTeam } from 'src/application/usecases/team/add-participant-on-team';
import {
  fakeTeam,
  fakeUser,
  mockTeamRepositoryFactory,
  mockUserRepositoryFactory,
} from '../test-utils';
import { UserRepository } from 'src/application/repositories/user.repository';
import { Team } from 'src/domain/entities/team/Team';

describe('Add Participant on Team', () => {
  it('Should add some participant on team', async () => {
    const user = fakeUser();
    const mockTeam = fakeTeam();

    let expectedTeam: Team;

    const teamRepository = {
      ...mockTeamRepositoryFactory(mockTeam),
      updateTeam: async (team) => {
        expectedTeam = team;
      },
    };

    const userRepository: UserRepository = mockUserRepositoryFactory(user);

    const addParticipantOnTeamUseCase = new AddParticipantOnTeam(
      teamRepository,
      userRepository,
    );
    const requestedByUser = '1';
    await addParticipantOnTeamUseCase.execute('1', '1', requestedByUser);

    expect(expectedTeam.getParticipants().length).toBe(1);
  });

  it('Should not add participant on team when team was deleted', async () => {
    const user = fakeUser();
    const mockTeam = fakeTeam();
    mockTeam.deleteTeam();

    const teamRepository = mockTeamRepositoryFactory(mockTeam);

    const userRepository: UserRepository = mockUserRepositoryFactory(user);

    const addParticipantOnTeamUseCase = new AddParticipantOnTeam(
      teamRepository,
      userRepository,
    );
    const requestedByUser = '1';
    expect(async () => {
      await addParticipantOnTeamUseCase.execute('1', '1', requestedByUser);
    }).rejects.toThrow('Cannot add participants to a deleted team');
  });
});

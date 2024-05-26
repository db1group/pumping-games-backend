import {
  CreateTeam,
  CreateTeamDTO,
} from 'src/application/usecases/team/create-team';
import { Team } from '../../domain/entities/team/Team';
import { fakeUser, mockUserRepositoryFactory } from '../test-utils';

describe('CreateTeam', () => {
  it('should create a team', async () => {
    const mockUser = fakeUser();
    const mockCreateTeamDTO: CreateTeamDTO = {
      name: 'Test',
      description: 'Test',
      leagueId: '1',
      userId: '1',
      logo: Buffer.from('Test'),
    };

    let expectedTeam: Team;
    const mockUserRepository = mockUserRepositoryFactory(mockUser);
    const mockTeamRepository = {
      createTeam: async (team) => {
        expectedTeam = team;
      },
      updateTeam: jest.fn(),
      findTeamById: jest.fn(),
    };

    const createTeam = new CreateTeam(mockTeamRepository, mockUserRepository);

    await createTeam.execute(mockCreateTeamDTO);

    expect(expectedTeam.getParticipants().length).toBe(1);
    expect(expectedTeam.getName()).toBe('Test');
  });
});

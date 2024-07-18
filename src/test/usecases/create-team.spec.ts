import {
  CreateTeam,
  CreateTeamInput,
} from 'src/application/usecases/team/create-team';
import { Team } from '../../domain/entities/team/Team';
import { fakeUser, mockUserRepositoryFactory } from '../test-utils';
import { BucketService } from 'src/application/services/bucket.service';

describe('CreateTeam', () => {
  it('should create a team', async () => {
    const mockUser = fakeUser();
    const mockCreateTeamDTO: CreateTeamInput = {
      name: 'Test',
      description: 'Test',
      userId: '1',
      logo: 'logo-path',
    };

    let expectedTeam: Team;
    const mockUserRepository = mockUserRepositoryFactory(mockUser);
    const bucketServiceMock: BucketService = {
      uploadFile: async (localUrl: string) => {
        return `s3/${localUrl}`;
      },
    };
    const mockTeamRepository = {
      createTeam: async (team) => {
        expectedTeam = team;
      },
      updateTeam: jest.fn(),
      findTeamById: jest.fn(),
    };

    const createTeam = new CreateTeam(
      mockTeamRepository,
      mockUserRepository,
      bucketServiceMock,
    );

    await createTeam.execute(mockCreateTeamDTO);

    expect(expectedTeam.getParticipants().length).toBe(1);
    expect(expectedTeam.name.getValue()).toBe('Test');
    expect(expectedTeam.logo.getValue()).toBe(`s3/${mockCreateTeamDTO.logo}`);
  });
});

import {
  CreateNation,
  CreateNationInput,
} from 'src/application/usecases/nation/create-nation';
import { fakeUser, mockUserRepositoryFactory } from '../test-utils';
import { BucketService } from 'src/application/services/bucket.service';
import { Team } from 'src/domain/entities/team/Team';
import { NationRepository } from 'src/application/repositories/nation.repository';

describe('Create Nation', () => {
  it('should create a nation', async () => {
    const mockUser = fakeUser();
    const mockCreateNationDTO: CreateNationInput = {
      name: 'Test',
      userId: '1',
      logo: 'logo-path',
    };

    let expectedNation: Team;
    let expectedNationEventId: string;
    const mockUserRepository = mockUserRepositoryFactory(mockUser);
    const bucketServiceMock: BucketService = {
      uploadFile: async (localUrl: string) => {
        return `s3/${localUrl}`;
      },
    };
    const mockTeamRepository: NationRepository = {
      createNation: async (team, id: string) => {
        expectedNation = team;
        expectedNationEventId = id;
      },
      findNationById: async () => {
        return new Team({
          id: '1',
          name: 'Test',
          logo: 'logo-path',
        });
      },
    };

    const createNation = new CreateNation(
      mockTeamRepository,
      mockUserRepository,
      bucketServiceMock,
    );
    const nationEventId = '2f656706-17e7-4112-9608-394b802a03c1';
    await createNation.execute(mockCreateNationDTO, nationEventId);

    expect(expectedNation.getParticipants().length).toBe(1);
    expect(expectedNation.name.getValue()).toBe('Test');
    expect(expectedNation.logo.getValue()).toBe(
      `s3/${mockCreateNationDTO.logo}`,
    );
    expect(expectedNationEventId).toBe(nationEventId);
  });
});

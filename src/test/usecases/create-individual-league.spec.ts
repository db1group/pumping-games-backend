import { LeagueRepository } from 'src/application/repositories/league.repository';
import {
  CreateIndividualLeague,
  CreateIndividualLeagueDTO,
} from 'src/application/usecases/league/create-individual-league';
import { IndividualLeague } from 'src/domain/entities/league/individual-league';

jest.mock('src/application/repositories/league.repository');

describe('CreateIndividualLeague', () => {
  it('should call save method of LeagueRepository', () => {
    let expectedLeague: IndividualLeague;

    const repoMock: LeagueRepository<IndividualLeague> = {
      save: async (league) => {
        expectedLeague = league;
      },
      findById() {
        throw new Error('Method not implemented.');
      },
    };
    const createIndividualLeague = new CreateIndividualLeague(repoMock);
    const dto: CreateIndividualLeagueDTO = {
      name: 'Test League',
      logo: 'logo-path',
      season: '2022',
      minParticipants: 10,
      maxParticipants: 20,
    };

    createIndividualLeague.execute(dto);

    expect(expectedLeague.getLeague()).toEqual({
      id: expect.any(String),
      name: dto.name,
      logo: dto.logo,
      season: dto.season,
      status: 'active',
      participants: [],
      minParticipants: 10,
      maxParticipants: 20,
    });
  });
});

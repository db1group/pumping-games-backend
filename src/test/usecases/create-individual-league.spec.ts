import { LeagueRepository } from 'src/application/repositories/league.repository';
import {
  CreateIndividualLeague,
  CreateIndividualLeagueDTO,
} from 'src/application/usecases/league/create-individual-league';
import { EvidenceType } from 'src/domain/entities/league/evidence-type';
import { IndividualLeague } from 'src/domain/entities/league/individual-league';
import { Id } from 'src/domain/value-objects/id';

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
      season: 2022,
      formEvidence: {
        id: new Id().toString(),
        name: 'Test Evidence',
        evidence: {
          type: EvidenceType.IMAGE,
          content: 'Test Content',
        },
      },
      minParticipants: 10,
      maxParticipants: 20,
    };

    createIndividualLeague.execute(dto);

    expect(expectedLeague.getLeague()).toEqual({
      name: dto.name,
      logo: dto.logo,
      season: dto.season,
      status: 'active',
      participants: [],
    });
  });
});

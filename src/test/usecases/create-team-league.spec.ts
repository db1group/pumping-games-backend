import { LeagueRepository } from 'src/application/repositories/league.repository';

import {
  CreateTeamLeague,
  CreateTeamLeagueDTO,
} from 'src/application/usecases/league/create-team-league';
import { EvidenceType } from 'src/domain/entities/league/evidence-type';
import { TeamLeague } from 'src/domain/entities/league/team-league';
import { Id } from 'src/domain/value-objects/id';

jest.mock('src/application/repositories/league.repository');

describe('CreateTeamLeague', () => {
  it('should call save method of LeagueRepository', () => {
    let expectedLeague: TeamLeague;

    const repoMock: LeagueRepository<TeamLeague> = {
      save: async (league) => {
        expectedLeague = league;
      },
      findById() {
        throw new Error('Method not implemented.');
      },
    };
    const createTeamLeague = new CreateTeamLeague(repoMock);
    const dto: CreateTeamLeagueDTO = {
      name: 'Test League',
      logo: 'logo-path',
      season: '2022',
      formEvidence: {
        id: new Id().toString(),
        name: 'Test Evidence',
        evidence: {
          type: EvidenceType.IMAGE,
          content: 'Test Content',
        },
      },
      maxTeams: 10,
      minTeams: 20,
    };

    createTeamLeague.execute(dto);

    expect(expectedLeague.getLeague()).toEqual({
      name: dto.name,
      logo: dto.logo,
      season: dto.season,
      status: 'active',
      teams: [],
    });
  });
});

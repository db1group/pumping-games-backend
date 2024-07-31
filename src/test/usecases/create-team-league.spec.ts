import { LeagueRepository } from 'src/application/repositories/league.repository';

import {
  CreateTeamLeague,
  CreateTeamLeagueDTO,
} from 'src/application/usecases/league/create-team-league';
import { TeamLeague } from 'src/domain/entities/league/team-league';

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
      maxTeams: 10,
      minTeams: 20,
    };

    createTeamLeague.execute(dto);

    expect(expectedLeague.getLeague()).toEqual({
      id: expect.any(String),
      name: dto.name,
      logo: dto.logo,
      season: dto.season,
      status: 'active',
      teams: [],
      maxTeams: 10,
      minTeams: 20,
    });
  });
});

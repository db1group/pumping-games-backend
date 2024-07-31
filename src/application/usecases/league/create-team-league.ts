import { Inject } from '@nestjs/common';
import {
  LeagueRepository,
  TEAM_LEAGUE_REPOSITORY,
} from 'src/application/repositories/league.repository';
import { TeamLeague } from 'src/domain/entities/league/team-league';

export class CreateTeamLeague {
  constructor(
    @Inject(TEAM_LEAGUE_REPOSITORY)
    private readonly leagueRepository: LeagueRepository<TeamLeague>,
  ) {}

  async execute(createTeamDTO: CreateTeamLeagueDTO) {
    const league = new TeamLeague({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
      season: createTeamDTO.season,
      minTeams: createTeamDTO.minTeams,
      maxTeams: createTeamDTO.maxTeams,
    });
    return this.leagueRepository.save(league, createTeamDTO.nationEventId);
  }
}

export class CreateTeamLeagueDTO {
  id?: string;
  name: string;
  logo?: string;
  season: string;
  minTeams: number;
  maxTeams: number;
  nationEventId?: string;
}

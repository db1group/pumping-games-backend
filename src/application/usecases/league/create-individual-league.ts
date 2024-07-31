import { LeagueRepository } from 'src/application/repositories/league.repository';
import { IndividualLeague } from 'src/domain/entities/league/individual-league';

export class CreateIndividualLeague {
  constructor(
    private readonly leagueRepository: LeagueRepository<IndividualLeague>,
  ) {}

  execute(createTeamDTO: CreateIndividualLeagueDTO) {
    const league = new IndividualLeague({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
      season: createTeamDTO.season,
      maxParticipants: createTeamDTO.maxParticipants,
      minParticipants: createTeamDTO.minParticipants,
    });
    this.leagueRepository.save(league);
  }
}

export class CreateIndividualLeagueDTO {
  id?: string;
  name: string;
  logo: string;
  season: string;
  minParticipants: number;
  maxParticipants: number;
}

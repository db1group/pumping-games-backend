import { LeagueRepository } from 'src/application/repositories/league.repository';
import { EvidenceType } from 'src/domain/entities/league/evidence-type';
import { TeamLeague } from 'src/domain/entities/league/team-league';

export class CreateTeamLeague {
  constructor(
    private readonly leagueRepository: LeagueRepository<TeamLeague>,
  ) {}

  execute(createTeamDTO: CreateTeamLeagueDTO) {
    const league = new TeamLeague({
      name: createTeamDTO.name,
      logo: createTeamDTO.logo,
      season: createTeamDTO.season,
      formEvidence: {
        id: createTeamDTO.formEvidence.id,
        name: createTeamDTO.formEvidence.name,
        evidence: {
          type: createTeamDTO.formEvidence.evidence.type,
          content: createTeamDTO.formEvidence.evidence.content,
        },
      },
      minTeams: createTeamDTO.minTeams,
      maxTeams: createTeamDTO.maxTeams,
    });
    this.leagueRepository.save(league);
  }
}

export class CreateTeamLeagueDTO {
  name: string;
  logo: string;
  season: string;
  formEvidence: {
    id: string;
    name: string;
    evidence: {
      type: EvidenceType;
      content: any;
    };
  };
  minTeams: number;
  maxTeams: number;
}

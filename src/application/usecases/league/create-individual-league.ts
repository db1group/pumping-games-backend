import { LeagueRepository } from 'src/application/repositories/league.repository';
import { EvidenceType } from 'src/domain/entities/league/evidence-type';
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
      formEvidence: {
        id: createTeamDTO.formEvidence.id,
        name: createTeamDTO.formEvidence.name,
        evidence: {
          type: createTeamDTO.formEvidence.evidence.type,
          content: createTeamDTO.formEvidence.evidence.content,
        },
      },
      maxParticipants: createTeamDTO.minParticipants,
      minParticipants: createTeamDTO.maxParticipants,
    });
    this.leagueRepository.save(league);
  }
}

export class CreateIndividualLeagueDTO {
  name: string;
  logo: Buffer;
  season: number;
  formEvidence: {
    id: string;
    name: string;
    evidence: {
      type: EvidenceType;
      content: any;
    };
  };
  minParticipants: number;
  maxParticipants: number;
}

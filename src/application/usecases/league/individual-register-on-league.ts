import { LeagueRepository } from 'src/application/repositories/league.repository';
import { UserRepository } from 'src/application/repositories/user.repository';
import { IndividualLeague } from 'src/domain/entities/league/individual-league';

export class IndividualRegisterOnLeague {
  constructor(
    private leagueRepository: LeagueRepository<IndividualLeague>,
    private userRepository: UserRepository,
  ) {}

  async execute(leagueId: string, userId: string): Promise<void> {
    const league = await this.leagueRepository.findById(leagueId);

    const user = await this.userRepository.findUserById(userId);

    league.addParticipant(user);

    await this.leagueRepository.save(league);
  }
}

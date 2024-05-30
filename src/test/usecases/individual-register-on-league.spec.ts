import { LeagueRepository } from 'src/application/repositories/league.repository';
import { UserRepository } from 'src/application/repositories/user.repository';
import { IndividualRegisterOnLeague } from 'src/application/usecases/league/individual-register-on-league';
import { IndividualLeague } from 'src/domain/entities/league/individual-league';
import {
  fakeIndividualLeague,
  fakeUser,
  mockUserRepositoryFactory,
} from '../test-utils';

describe('IndividualRegisterOnLeague', () => {
  it('should add a user to a league', async () => {
    let expectedLeague: IndividualLeague;
    const leagueRepository: LeagueRepository<IndividualLeague> = {
      save: async (league: IndividualLeague) => {
        expectedLeague = league;
      },
      findById: async () => {
        const dto = fakeIndividualLeague();
        return new IndividualLeague(dto);
      },
    };
    const user = fakeUser();
    const userRepository: UserRepository = mockUserRepositoryFactory(user);
    const individualRegisterOnLeague = new IndividualRegisterOnLeague(
      leagueRepository,
      userRepository,
    );

    await individualRegisterOnLeague.execute('1', '1');

    const isUserRegistred = expectedLeague
      .getParticipants()
      .some((p) => p.id === user.id);

    expect(isUserRegistred).toBe(true);
  });
});

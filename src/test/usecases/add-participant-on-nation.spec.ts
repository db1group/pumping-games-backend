import { fakeUser } from '../test-utils';
import { Team } from 'src/domain/entities/team/Team';
import { NationEvent } from 'src/domain/entities/event/nation-event';
import { EventStatus } from 'src/domain/entities/event/event-status';
import { AddParticipantOnNation } from 'src/application/usecases/nation/add-participant-on-nation';
import { UserRepositoryMemory } from 'src/infra/repositories/memory/user/user.repository.memory';
import { NationEventRepositoryMemory } from 'src/infra/repositories/memory/nation-event/nation-event.repository.memory';

describe('Add Participant on Nation', () => {
  test('Should add a participant on nation', async () => {
    const leagueId = '8c2c54f7-b9c0-4b1c-85ec-de95eb961430';
    const league = new NationEvent({
      name: 'Pumping games',
      id: leagueId,
      status: EventStatus.ACTIVE,
      season: '2024',
    });
    const nationIdToAddUser = '233f796d-c48e-46f0-ae1d-a9cd754f3b2d';
    const nation1 = new Team({
      id: nationIdToAddUser,
      name: 'Brazil',
      logo: 'logourl',
    });
    const owner1 = fakeUser();
    nation1.addOwnerOfTheTeam(owner1);
    nation1.addParticipant(fakeUser(), owner1);

    const nation2 = new Team({
      name: 'Brazil',
      logo: 'logourl',
    });
    const owner2 = fakeUser();
    nation2.addOwnerOfTheTeam(owner2);
    nation2.addParticipant(fakeUser(), owner2);

    league.addNation(nation1);
    league.addNation(nation2);

    const userToAdd = fakeUser();

    const userRepository = new UserRepositoryMemory();
    userRepository.create(owner1);
    userRepository.create(userToAdd);

    const nationEventRepository = new NationEventRepositoryMemory([league]);

    const addParticipantOnNation = new AddParticipantOnNation(
      nationEventRepository,
      userRepository,
    );

    await addParticipantOnNation.execute(
      league.id,
      nationIdToAddUser,
      userToAdd.id,
      owner1,
    );

    const nationEvent = await nationEventRepository.findEventById(league.id);

    expect(nationEvent.nations[0].participants.length).toBe(3);
  });
});

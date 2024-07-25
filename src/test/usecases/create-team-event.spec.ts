import { TeamEventRepository } from 'src/application/repositories/team-event.repository';
import {
  CreateTeamEvent,
  CreateTeamEventInput,
} from 'src/application/usecases/nation-event/create-nation-event';
import { TeamEvent } from 'src/domain/entities/event/team-event';

describe('Create Team Event', () => {
  it('should call save method of LeagueRepository', async () => {
    let expectedTeamEvent: TeamEvent;

    const TeamEventRepositoryMock: TeamEventRepository = {
      createEvent: async (teamEvent: TeamEvent) => {
        expectedTeamEvent = teamEvent;
      },
      updateEvent: async (teamEvent: TeamEvent) => {
        expectedTeamEvent = teamEvent;
      },
      findEventById: async () => null,
      removeEvent: async (teamEvent: TeamEvent) => {
        expectedTeamEvent = teamEvent;
      },
    };
    const createTeamEvent = new CreateTeamEvent(TeamEventRepositoryMock);

    const param: CreateTeamEventInput = {
      name: 'Event Name',
      status: 'PENDING',
      logo: 'logo-path',
      season: 1,
      leagues: [
        {
          name: 'League Name',
          logo: 'logo-path',
          maxTeams: 10,
          minTeams: 2,
          season: 1,
          formEvidence: {
            name: 'Form Evidence Name',
          },
        },
      ],
    };

    await createTeamEvent.execute(param);
    expect(expectedTeamEvent.getName()).toBe('Event Name');
    expect(expectedTeamEvent.getStatus()).toBe('PENDING');
    expect(expectedTeamEvent.season.getValue()).toBe(1);
  });
});

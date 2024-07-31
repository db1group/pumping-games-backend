import { NationEventRepository } from 'src/application/repositories/nation-event.repository';
import {
  CreateNationEvent,
  CreateNationEventInput,
} from 'src/application/usecases/nation-event/create-nation-event';

import { NationEvent } from 'src/domain/entities/event/nation-event';

describe('Create Nation Event', () => {
  it('should call save method of LeagueRepository', async () => {
    let expectedNationEvent: NationEvent;

    const NationEventRepositoryMock: NationEventRepository = {
      createEvent: async (NationEvent: NationEvent) => {
        expectedNationEvent = NationEvent;
      },
      updateEvent: async (NationEvent: NationEvent) => {
        expectedNationEvent = NationEvent;
      },
      findEventById: async () => null,
      removeEvent: async (NationEvent: NationEvent) => {
        expectedNationEvent = NationEvent;
      },
    };
    const createNationEvent = new CreateNationEvent(NationEventRepositoryMock);

    const param: CreateNationEventInput = {
      name: 'Event Name',
      status: 'PENDING',
      logo: 'logo-path',
      season: '1',
      leagues: [
        {
          name: 'League Name',
          logo: 'logo-path',
          maxTeams: 10,
          minTeams: 2,
          season: '1',
        },
      ],
    };

    await createNationEvent.execute(param);
    expect(expectedNationEvent.getName()).toBe('Event Name');
    expect(expectedNationEvent.getStatus()).toBe('PENDING');
    expect(expectedNationEvent.season.getValue()).toBe('1');
  });
});

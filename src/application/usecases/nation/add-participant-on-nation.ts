import { Inject } from '@nestjs/common';
import {
  NATION_EVENT_REPOSITORY,
  NationEventRepository,
} from 'src/application/repositories/nation-event.repository';

import {
  USER_REPOSITORY,
  UserRepository,
} from 'src/application/repositories/user.repository';
import { User } from 'src/domain/entities/user/user';

export class AddParticipantOnNation {
  constructor(
    @Inject(NATION_EVENT_REPOSITORY)
    private readonly nationEventRepository: NationEventRepository,
    @Inject(USER_REPOSITORY)
    private readonly userRepository: UserRepository,
  ) {}

  async execute(
    nationEventId: string,
    nationId: string,
    participantToAdd: string,
    requestedBy: User,
  ): Promise<void> {
    const nationEvent =
      await this.nationEventRepository.findEventById(nationEventId);

    const participant =
      await this.userRepository.findUserById(participantToAdd);

    nationEvent.addParticipant(nationId, participant, requestedBy);

    return this.nationEventRepository.updateEvent(nationEvent);
  }
}

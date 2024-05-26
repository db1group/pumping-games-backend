import { Email } from 'src/domain/value-objects/email';

export interface SendRequestTeamParticipation {
  sendRequest(email: Email): Promise<void>;
}

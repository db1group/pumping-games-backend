import { Email } from 'src/domain/value-objects/email';

export interface SendRequestParticipationEmail {
  sendRequest(email: Email): Promise<void>;
}

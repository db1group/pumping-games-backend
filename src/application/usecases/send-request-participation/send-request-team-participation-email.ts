import { Email } from 'src/domain/value-objects/email';
import { EmailService, EmailTemplate } from '../../repositories/email/email';
import { SendRequestParticipationEmail } from './send-request-participation';

export class SendRequestTeamParticipationEmail
  implements SendRequestParticipationEmail
{
  constructor(private readonly emailService: EmailService) {}
  sendRequest(email: Email): Promise<void> {
    const template: EmailTemplate = {
      content: async () => {
        return `
                  <h1>Request for participation</h1>
                  <p>You have received a request to participate in a team.</p>
                  `;
      },
    };
    return this.emailService.sendEmail(email, template);
  }
}

import { Email } from 'src/domain/value-objects/email';

export interface EmailService {
  sendEmail(email: Email, content: EmailTemplate): Promise<void>;
}

export interface EmailTemplate {
  content(): Promise<string>;
}

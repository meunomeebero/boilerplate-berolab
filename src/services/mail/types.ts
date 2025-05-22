/**
 * Mail sender configuration
 */
export interface MailSender {
  name: string;
  mailAddress: string;
}

/**
 * Mail recipient configuration
 */
export interface MailRecipient {
  name: string;
  recipient: string;
}

/**
 * Email sending parameters
 */
export interface SendEmailParams {
  from: MailSender;
  to: MailRecipient;
  subject?: string;
  htmlContent: string;
}

/**
 * Mail service interface
 */
export interface MailService {
  sendEmail(params: SendEmailParams): Promise<void>;
} 
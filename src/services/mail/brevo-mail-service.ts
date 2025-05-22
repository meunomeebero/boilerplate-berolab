import * as brevo from '@getbrevo/brevo';
import { getEnv } from '../../lib/env';
import { MailService, SendEmailParams } from './types';

/**
 * Brevo Mail Service implementation
 * Provides email sending capabilities using Brevo's API
 */
export class BrevoMailService implements MailService {
  private readonly apiKey: string;
  private readonly apiInstance: brevo.TransactionalEmailsApi;

  constructor() {
    try {
        this.apiKey = getEnv('BREVO_API_KEY');
        this.apiInstance = new brevo.TransactionalEmailsApi();
        this.apiInstance.setApiKey(brevo.TransactionalEmailsApiApiKeys.apiKey, this.apiKey);
    } catch (error) {
        console.error('Failed to initialize Brevo API:', error);
        throw new Error('Failed to initialize Brevo API. Please try again later.');
    }
  }

  /**
   * Sends an email using Brevo API
   * @param params Email parameters including sender, recipient, and content
   */
  public async sendEmail(params: SendEmailParams): Promise<void> {
    try {
      const { from, to, subject = '', htmlContent } = params;
      
      const sendSmtpEmail = new brevo.SendSmtpEmail();

      // Set email content
      sendSmtpEmail.subject = subject;
      sendSmtpEmail.htmlContent = htmlContent;
      
      // Configure email sender
      sendSmtpEmail.sender = {
        name: from.name,
        email: from.mailAddress,
      };
      
      // Configure email recipient
      sendSmtpEmail.to = [
        {
          name: to.name,
          email: to.recipient,
        },
      ];

      // Send the email
      const result = await this.apiInstance.sendTransacEmail(sendSmtpEmail);
      console.info('Email sent successfully:', result?.response?.statusCode);
    } catch (error) {
      console.error('Failed to send email via Brevo:', error);
      throw new Error('Failed to send email. Please try again later.');
    }
  }
} 
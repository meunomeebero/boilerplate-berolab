# Brevo Mail Service

## Setup

1. Add your Brevo API key to the `.env` file:

```
BREVO_API_KEY=your_brevo_api_key_here
```

## Usage Example

```typescript
import { BrevoMailService } from '@/services/mail';

async function sendWelcomeEmail(userName: string, userEmail: string): Promise<void> {
  const mailService = new BrevoMailService();
  
  await mailService.sendEmail({
    from: {
      name: 'Your App Name',
      mailAddress: 'noreply@yourapp.com'
    },
    to: {
      name: userName,
      recipient: userEmail
    },
    subject: 'Welcome to Our App!',
    htmlContent: `<h1>Welcome, ${userName}!</h1><p>Thanks for joining our platform.</p>`
  });
}
```

## Interface

The mail service implements the following interface:

```typescript
interface SendEmailParams {
  from: {
    name: string;
    mailAddress: string;
  };
  to: {
    name: string;
    recipient: string;
  };
  subject?: string;
  htmlContent: string;
}
``` 
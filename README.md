# Next.js SaaS Boilerplate

A **production-ready** full-stack boilerplate built on top of Next.js 14 App Router. It ships with authentication, payments, transactional e-mails, dark/light theme, type-safe APIs and an opinionated project structure so you can focus on building features—not plumbing.

## ✨ Key Features

- **Next.js 14** with App Router and React 19
- **Type-safe end-to-end APIs** with tRPC + SuperJSON
- **Authentication** with NextAuth.js (Google OAuth pre-configured)
- **Subscription billing** via Stripe Checkout + Webhooks
- **Transactional e-mail** service powered by Brevo (Sendinblue)
- **PostgreSQL + Prisma** ORM (including generated types)
- **shadcn/ui + Tailwind CSS** for a beautiful dark/light UI
- **Zustand** for minimal global state management
- **Typed environment variables** validated with Zod
- Pre-configured ESLint, Prettier, Husky & lint-staged

---

## 🛠 Requirements

1. **Node.js 18+**
2. **PostgreSQL 14+** (local or remote instance)
3. **Stripe** account (test keys are enough for development)
4. **Brevo (Sendinblue)** account for e-mail delivery
5. **Google Cloud** OAuth credentials

---

## 🚀 Getting Started

### 1. Clone & install dependencies

```bash
# SSH
$ git clone git@github.com:meunomeebero/boilerplate-berolab.git my-app
# — or —
# HTTPS
$ git clone https://github.com/meunomeebero/boilerplate-berolab.git my-app

$ cd my-app
$ npm install   # or pnpm install / yarn install / bun install
```

### 2. Configure environment variables

Copy the example file and fill in your own values:

```bash
$ cp .env.example .env
```

```env
# ——————— Database —————————
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/mydatabase"

# ——————— NextAuth —————————
NEXTAUTH_SECRET="a-very-long-random-string"      # used to encrypt JWTs
NEXTAUTH_URL="http://localhost:3000"            # full public URL of the app

# ——————— OAuth Providers —————————
GOOGLE_CLIENT_ID="xxxxxxxxxxxx.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="xxxxxxxxxxxxxxxxxxxx"

# ——————— Stripe —————————
STRIPE_SECRET_KEY="sk_test_…"
STRIPE_WEBHOOK_SECRET="whsec_…"                  # obtained after creating a webhook endpoint in Stripe dashboard
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_…"
NEXT_PUBLIC_STRIPE_PRICE_ID="price_…"            # recurring price the user will subscribe to
STRIPE_PRODUCT_ID="prod_…"                       # optional – only if you need to reference the product elsewhere

# ——————— E-mail (Brevo) —————————
BREVO_API_KEY="your_brevo_api_key_here"

# ——————— Public —————————
NEXT_PUBLIC_APP_URL="http://localhost:3000"      # used by the client (tRPC links, etc.)
```

> **Tip:** keep a separate `.env.production` with live credentials for your deployment platform.

### 3. Generate the database & Prisma Client

```bash
$ npx prisma migrate dev --name init
```

### 4. Run the development server

```bash
$ npm run dev
```

The app will be available at <http://localhost:3000>.

---

## 🧬 Project Structure

```
├── src
│   ├── app/                 # Next.js pages, layouts & API routes (App Router)
│   ├── components/          # Re-usable UI primitives & composite components
│   ├── lib/                 # Client + server utilities (auth, db, stripe, env, …)
│   ├── server/              # tRPC routers & server-side logic
│   └── services/            # External integrations (mail, payments, etc.)
├── prisma/                  # Prisma schema & migrations
├── docs/                    # Additional documentation & guidelines
└── …
```

Detailed development conventions live in `docs/DEVELOPMENT_GUIDELINES.md`.

---

## 📨 Transactional Emails

Emails are sent through Brevo (formerly Sendinblue). Make sure to:

1. Add your API key to `.env` (`BREVO_API_KEY`)
2. Verify your sender domain in the Brevo dashboard
3. Use the `BrevoMailService` class under `src/services/mail` to send e-mails

Example:

```ts
import { BrevoMailService } from "@/services/mail";

await new BrevoMailService().sendEmail({
  from: { name: "MyApp", mailAddress: "noreply@myapp.com" },
  to: { name: "Ada Lovelace", recipient: "ada@example.com" },
  subject: "Welcome 👋",
  htmlContent: "<h1>Hello!</h1><p>You are awesome.</p>",
});
```

---

## 💸 Stripe Webhooks

1. In the Stripe Dashboard, create a **Webhook endpoint** pointing to `/api/webhooks/stripe` (e.g. `http://localhost:3000/api/webhooks/stripe` during development using [Stripe CLI `tunnel`](https://stripe.com/docs/stripe-cli)).
2. Subscribe to events you care about, e.g. `checkout.session.completed`, `invoice.paid`, etc.
3. Copy the signing secret into `.env` → `STRIPE_WEBHOOK_SECRET`.

---

## 📦 Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Compile for production |
| `npm start` | Run the production build |
| `npm run lint` | ESLint + TypeScript checks |
| `npm run format` | Prettier formatting |
| `npm run prisma` | Run Prisma CLI |

---

## 🏗 Deployment

The project works out-of-the-box on any platform that supports Next.js (Vercel, Netlify, Render, Railway, Fly.io, etc.).

1. Add all environment variables to your hosting provider
2. ​`npm run build` followed by `npm start` (most providers handle this automatically)

---

## 📝 License

[MIT](LICENSE)

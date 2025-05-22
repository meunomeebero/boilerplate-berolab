🧠 **Prompt de Regras de Desenvolvimento para Cursor**

Sempre que for gerar, editar ou sugerir código neste projeto, siga rigorosamente as diretrizes abaixo para garantir organização, legibilidade, abstração, escalabilidade e boas práticas de desenvolvimento:

### 📁 Estrutura e Modularização

* Divida o código em **módulos pequenos e reutilizáveis**, evitando arquivos com mais de **200 linhas de código**.
* Organize os diretórios por **responsabilidade (e.g. `auth/`, `payments/`, `users/`, `utils/`)**, e dentro deles, use subpastas como `services/`, `routes/`, `schemas/`, `types/`, `lib/`, `hooks/`.
* Sempre que possível, **crie camadas de abstração claras** entre lógica de negócio, comunicação com o banco (Prisma), lógica de UI e integração com terceiros (como Stripe).

### 🧾 Nomeação e Legibilidade

* Use **nomes de funções, variáveis, arquivos e pastas extremamente descritivos**, mesmo que fiquem longos, como por exemplo:
  `createStripeCustomerSubscriptionPaymentCheckout`.
* Evite abreviações. Prefira:
  ✅ `handleUserAuthenticationFlow`
  ❌ `handleAuth`
* Nomes de arquivos devem ser escritos em `kebab-case.ts` (ex: `create-stripe-checkout.ts`).

### 🌐 API & tRPC

* Separe claramente as rotas tRPC por funcionalidade. Agrupe os procedimentos em routers coesos (`authRouter`, `paymentRouter`, etc.).
* Evite misturar validações, lógica de negócio e resposta em um único arquivo. Use `zod` para validações em arquivos separados (`schemas/`).

### 💬 Comentários e Documentação

* Comente apenas **quando necessário**, sempre em **inglês**, explicando o “porquê” e não o “como”.
* Use JSDoc somente para funções complexas ou utilitários compartilhados.

### 💡 Boas práticas e UX

* Utilize Zustand apenas para **estados globais que precisam ser compartilhados entre múltiplos componentes**. Prefira estados locais sempre que possível.
* Centralize todas as chamadas de API externas (como Stripe) em arquivos próprios no diretório `services/` ou `integrations/`.
* Envolva funções sensíveis ou críticas com logs e handlers de erro.

### 🧪 Testes e Robustez

* Onde for possível, escreva funções puras para facilitar testes.
* Evite lógica diretamente dentro de handlers ou routers. Extraia para funções reutilizáveis.

### 🔐 Segurança e Configurações

* Armazene **todas as chaves, segredos e configurações em `.env`**, com exemplos em `.env.example`.
* Crie um helper para **validar variáveis de ambiente** no startup do app.

### 🎨 UI e Estilo

* Use a biblioteca `shadcn/ui` respeitando o tema **dark, minimalista e elegante**.
* Evite muitas variações de tonalidade para facilitar o gerenciamento global de cores.

---

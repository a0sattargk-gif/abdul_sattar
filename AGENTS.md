## Security: Environment Files and Secrets

Environment files and secret-bearing configuration are strictly protected.

### Protected files

Coding agents MUST NOT read, open, inspect, search, print, modify, overwrite,
delete, rename, copy, move, parse, summarize, or otherwise access:

- `.env`
- `.env.*`
- `.env.local`
- `.env.development`
- `.env.development.local`
- `.env.production`
- `.env.production.local`
- `.env.test`
- `.env.test.local`

This restriction applies even when debugging configuration, authentication,
database connections, email/SMTP, third-party APIs, deployment issues, or
missing environment variables.

### Terminal commands

Coding agents MUST NOT use terminal commands or scripts to expose protected
environment files or their values.

Prohibited examples include, but are not limited to:

- `cat .env*`
- `less .env*`
- `head .env*`
- `tail .env*`
- `grep` against `.env*`
- `sed` against `.env*`
- `awk` against `.env*`
- `find`/`xargs` operations that read `.env*`
- `printenv`
- `env`
- `set` or equivalent commands used to reveal environment variables
- scripts that enumerate or print `process.env`
- debugging statements that log secrets or environment values

Do not indirectly obtain secrets by running commands, application code, tests,
debuggers, or scripts whose purpose is to reveal protected environment values.

### Allowed environment file

The only environment-related file coding agents may read or modify is:

- `.env.example`

`.env.example` MUST contain variable names and safe placeholder values only.
Never place real credentials, tokens, passwords, API keys, connection strings,
or other secrets in `.env.example`.

### When a new environment variable is required

If application code requires a new environment variable:

1. Reference it in application code through `process.env`.
2. Add the variable name to `.env.example` with an empty or safe placeholder.
3. Tell the developer which variable must be configured manually.
4. Do NOT inspect any protected `.env*` file to determine its current value.
5. Do NOT generate, guess, copy, or insert a real secret.
6. Do NOT modify the developer's local environment files.

Example:

```ts
const smtpPassword = process.env.SMTP_PASSWORD;
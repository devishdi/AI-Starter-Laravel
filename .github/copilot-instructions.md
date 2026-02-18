# Copilot instructions for AI coding agents (AI-Starter-Laravel)

This file gives focused, actionable guidance for AI coding agents contributing to this repository.

1. Big picture

- This is a Laravel (v12) monorepo-like project. The main app lives at the repository root with a full Laravel app in `app/`, `routes/`, `resources/`, `public/` and `database/`.
- Frontend: Inertia + React lives under `resources/js` and is built with Vite/Tailwind. See `package.json` and `vite.config.ts`.
- Dev environment: Docker compose is under `setup/docker-compose.yml` and the Makefile wraps common developer flows (start/stop/build/test). Use the Makefile targets rather than running containers directly.

2. Key directories & patterns (use these when editing)

- `app/Repositories` and `app/Services`: repository and service layers—business logic belongs in `Services`, persistence in `Repositories`.
- `app/Validations` and `app/Traits`: shared validation helpers and traits; prefer composition over altering controller logic.
- `app/Http/Controllers`, `app/Http/Requests`, `app/Http/Middleware`: follow existing request/response and validation patterns (use Form Requests for validation).
- `routes/` (web.php, api.php, admin.php): route definitions are split by surface (web, api, admin). Add new routes to the appropriate file.

3. Tooling & common commands (exact commands to run)

- Start the local environment (recommended):
    - `make project-start`
    - `make app-install` (installs backend + frontend deps)
- Stop / remove containers:
    - `make project-stop`
    - `make project-down`
- Backend tasks (run inside containers via Makefile targets):
    - Install composer deps: `make app-back-install`
    - Run migrations: `make app-back-migrate`
    - Run tests: `make app-back-test-unit` (wraps `php artisan test`)
    - Static analysis: `make app-back-static-analysis` (runs `vendor/bin/phpstan`)
    - Code-style/format: `make app-back-cs-fix` / `make app-back-cs-check` (uses `vendor/bin/pint`)
- Frontend tasks (Makefile delegates to `yarn`):
    - Install and build: `make app-front-install` then `make app-front-build`
    - Run dev server: `make app-front-run` (exposes Vite on 5173)
    - Lint/format: `make app-front-lint`, `make app-front-format-fix`

4. Project-specific conventions

- Use the repository/service pattern: controllers should be thin, call `Services`, and `Repositories` should encapsulate DB interaction (see `app/Repositories/*` and `app/Services/*`).
- Validation: prefer Form Request classes in `app/Http/Requests` and shared validators in `app/Validations`.
- Namespacing: PSR-4 mapping is `App\\` -> `app/` (see `composer.json`). Keep classes within the appropriate namespace.
- Frontend: `resources/js` is Inertia + React. Use existing components and patterns instead of introducing new frameworks.

5. Tests & CI

- Tests use Pest and PHPUnit. Run backend tests with `make app-back-test-unit` or `vendor/bin/pest` inside the container.
- CI targets are defined in `Makefile` (`ci-back-test`, `ci-front-test`) and expect `vendor/bin/pint`, `vendor/bin/pest`, and `vendor/bin/phpstan` to be available.

6. Integration points & external services

- Search: OpenSearch nodes are defined in `setup/docker-compose.yml` (9200) and referenced by search-related code/configs.
- Mail: `mailhog` is available in compose (ports 8025/1025) for local email inspection.
- Queue/Cache: Redis and a queue worker are part of the dev compose setup. Use the Makefile targets or `php artisan queue:work` inside the `php` container.

7. Formatting & linting

- PHP: `vendor/bin/pint` (Makefile targets: `app-back-cs-check`, `app-back-cs-fix`).
- JS: `eslint` and `prettier` configured; run `make app-front-lint` and `make app-front-format-fix` (Makefile invokes `yarn`).

8. Editing guidance for AI agents

- Small changes: prefer updating service or repository classes instead of controllers when behavior is business-logic related.
- DB changes: add migrations under `database/migrations` and seeders under `database/seeders`.
- Routes: add API endpoints to `routes/api.php`, web pages to `routes/web.php`, admin routes to `routes/admin.php`.
- Keep frontend changes scoped to `resources/js` and match existing Inertia page/component patterns.

9. Files to inspect first for context

- `Makefile` (workflow & container commands)
- `setup/docker-compose.yml` (local infra: DB, OpenSearch, Redis, Mailhog)
- `composer.json` (PHP deps & scripts)
- `package.json` and `vite.config.ts` (frontend tooling)
- `app/Repositories`, `app/Services` (business logic patterns)
- `tests/` (Pest tests demonstrating common test helpers)

10. If you are unsure

- Prefer making small, easily reviewed changes and add tests where applicable (see `tests/`).
- Ask for clarification when a design decision touches multiple layers (routes, controller, service, repository).

If anything above is unclear or you'd like more examples (specific controllers, services, or tests annotated), tell me which area to expand.

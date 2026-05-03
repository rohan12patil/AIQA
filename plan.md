Test plan: Playwright saucedemo checkout

Problem statement
- Provide reliable end-to-end tests for the Sauce Demo checkout flow that can be run locally and in CI, capture traces for debugging, and run across supported browsers.

Proposed approach
1. Keep tests in TypeScript using @playwright/test.
2. Add tracing (start/stop) per test and save traces to test-results/*.zip.
3. Create CI job (GitHub Actions) to run tests headlessly and upload traces on failure.
4. Make tests data-driven and parameterizable for credentials and user data.
5. Validate cross-browser runs (chromium, firefox, webkit).

Todos
- create-ts-test: Create a TypeScript test for login → add item → checkout. (saucedemo.spec.ts already created)
- add-tracing: Start/stop tracing and store traces under test-results/*.zip.
- run-local-tests: Install deps and run tests locally (document commands).
- ci-integration: Add GitHub Actions workflow to install deps, run tests, and upload artifacts.
- data-driven-tests: Parameterize inputs (users, addresses) and add a small matrix of cases.
- cross-browser: Ensure tests run on chromium/firefox/webkit in CI.
- error-handling: Add stable selectors, retries, and capture screenshots on failure.
- review-traces: Add a short guide to open traces with "npx playwright show-trace <zip>".

Notes and considerations
- Credentials: use standard_user/secret_sauce for functional tests; avoid committing secrets for other users.
- Trace retention: keep traces per-run; consider pruning policy for CI artifacts.
- Locators: prefer data-test attributes; use fallback selectors if necessary.

How to run locally (summary)
- npm init -y
- npm i -D @playwright/test
- npx playwright install
- npx playwright test saucedemo.spec.ts --headed --project=chromium

Next step
- Mark 'create-ts-test' in_progress and run the test locally; then implement CI.

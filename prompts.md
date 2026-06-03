Prompt1:

Role: You are an expert QA Engineer.

Task1: 
 Explore & review https://www.saucedemo.com website.
 Use Playwright CLI & your understanding of the website flows to identify critical user journeys, negative cases & risk areas. 
 Then update the test_plan.md file to define the testing strategy for this site the plan must include: 
1. Scope (in-scope/out-of-scope features)
2. Test Approach (Smoke, Regression, E2E)
3. Coverage by features
4. Test data/accounts
5. Automation Strategy (What to automate first,tag the test scripts by features)

use the Playwright CLI & Playwright Skills to explore website www.saucedemo.com, 
once exploration is done update the test_plan.md file to plan the testing strategy for this website


Prompt2: (Generate maunal test_cases.md from test_plan.md)
Using the test_plan.md, create plain-text functional test cases in test_cases.md 
Requirements: 
Organize test cases by features
Use consistent format per test case: 
    ID
    Title
    Preconditions
    Test Data
    Steps
    Expected Results
    Priority (P0/P1/P2)
    Tags
    Cover happy path, negative & edge cases
    Ensure each test case is atomic (one purpose) and traceable back to the test plan.

Output: Plain English contents in the test_cases.md only



Prompt3: (Convert test_cases.md into Playwright automated tests using Playwright CLI)

Using test_cases.md as the source of truth, implement Playwright automation tests.
Requirements:
- Use Playwright Test with a maintainable structure
- Page Object Model design pattern
- Reusable helpers for login or navigation
- Stable Selectors (prefer data-test attributes if present)
- Include minimal config updates if needed (baseURL, retries, video on failure)
- Output should be runnable, deterministic & aligned with the test plan.
- Output: add test scripts for each feature/module in the tests folder 







Using Playwright-CLI I want you to create valid automation testcases update test_cases.md file with the created test cases.



Prompt3:
Use the test cases in test_cases.md file & write playwright automation test scripts in the tests folder











Prompt2 Variation:
Using Playwright-CLI I want you to create valid automation testcases use POM[Page Object Model] architecture for Test Cases A1 , B1 & C1
https://playwright.dev/docs/pom refer this for POM architecture


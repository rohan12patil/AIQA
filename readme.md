# 🎭 AI-Powered Test Lifecycle Automation in VS Code

**AIQE - AI assisted Quality Engineering **

> From requirement to test report in minutes — AI reads your specs, writes the test plan, derives test cases from it, writes the automation scripts, and ships you the results, entirely inside VS Code.

---

## 💡 Proposed Solution

An AI-first testing stack — Copilot/Claude and Playwright along with Playwright CLI — wired directly into your VS Code workflow to take you from prompt to passing tests:

- Generate test scenarios and detailed test cases from requirements.
- Auto-create reusable Playwright scripts using a maintainable structure (Page Object Model + helpers).
- Organize tests into smoke, regression, and negative suites with traceable IDs/tags.
- Execute tests and produce standardized reports (HTML/JSON/JUnit) with failure artifacts (trace/video/screenshots).
- Continuously improve test assets using historical runs and reusable patterns.

---

## 🔄 The 4-Step AI Workflow

```
Explore  >  Plan  >  Prepare  >  Automate
```

| Step | What Happens |
|---|---|
| **Explore** | AI explores the application to gain contextual knowledge from Business Requirements |
| **Plan** | AI crafts a comprehensive Test Plan listing all features & scenarios |
| **Prepare** | Test Plan is used to generate a detailed list of Test Cases |
| **Automate** | AI uses the test cases + Playwright CLI to write automation scripts |

---

## 🤖 MCP vs Playwright CLI

### MCP (Model Context Protocol)
Lets AI directly connect to and control a browser using pre-built tools. After **every** action, the browser sends AI the **entire** page state.

> MCP is powerful but **expensive on context**, making it less practical for agents already handling large codebases or frequent browser interactions.

**Token Cost Per Action:**
| Action | Tokens |
|---|---|
| `playwright_navigate(url)` | ~8,000 |
| `playwright_click(selector)` | ~8,000 |
| `playwright_get_text()` | ~8,000 |
| **Total (3 actions)** | **~24,000** |

### Playwright CLI
A standalone tool by Microsoft built specifically for AI agents. AI writes complete scripts and runs them via the command line interface — **token efficient**.

---

## 🧠 What is a Skill?

A **Skill** is a `SKILL.md` file that gives AI pre-built best practices for a specific task — before it writes a single line of code. Think of it as AI's instruction manual.

| | Without Skill | With Skill (SKILL.md) |
|---|---|---|
| Approach | Figures it out by trial & error | Reads instructions first |
| Quality | Makes mistakes → uses more tokens | Knows best practices immediately |
| Speed | Slower, unpredictable results | Right approach, first try, fewer tokens |

**The Playwright-CLI Skill tells AI to:**
1. Use CLI commands, not MCP
2. Batch all actions in one script
3. Be surgical — only extract what's needed
4. Return clean JSON only

---

## ✅ Project Proof-of-Concept Delivered

This approach has already been demonstrated by converting test-case requirements into a complete Playwright automation suite, including:

- End-to-end suite structure for navigation, search, PLP/PDP, cart, checkout, delivery, pricing, edge cases, and mobile smoke.
- 30 automated test cases with testcase IDs and tagging model (smoke/regression/negative, P0/P1).
- Reusable page abstractions, utilities, and deterministic test organization for maintainability and scale.

---

## 📊 Expected Impact

### Dollar Impact
- 40–60% reduction in test design + scripting effort
- 30–50% faster test cycle time for release validation
- 20–35% lower maintenance effort through reusable test architecture
- Reduced defect leakage risk via broader edge-case automation and consistent regression coverage

### Other Impact
- Standardized, repeatable QA workflow across teams
- Faster onboarding with less dependency on specialized automation experts
- Better alignment with CI/CD and DevSecOps practices
- Higher release confidence through continuous and traceable validation
- Foundation for self-improving testing based on past outcomes and patterns

---

## 📦 Installation

Init Playwright & install Playwright CLI globally using npm:

```bash
npm init playwright@latest
npm install -g @playwright/cli@latest
```

### Verify Installation

```bash
playwright-cli --help
```

### Install Skills

```bash
playwright-cli install --skills
```

---

## 🔗 Reference URLs

- **Playwright:** https://playwright.dev/
- **Playwright MCP:** https://playwright.dev/mcp/introduction
- **Playwright CLI (Agent):** https://playwright.dev/agent-cli/introduction
- **Agent Skills:** https://agentskills.io/home

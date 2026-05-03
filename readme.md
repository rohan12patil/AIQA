# 🎭 Playwright CLI

> A powerful command-line interface for Playwright, enabling automated browser testing and web automation.

## 📦 Installation

Install the Playwright CLI globally using npm:

```bash
npm install -g @playwright/cli@latest 
```

### Verify Installation

Check that the installation was successful:

```bash
playwright-cli --help
```

### Install Skills & Agent

Install additional skills for the Playwright CLI:

```bash
npm init playwright@latest
playwright-cli install --skills
npx playwright init-agents --loop=vscode

```

---

## 🚀 Usage Examples

### Prompt 1: Basic Login & Checkout with Video Recording

```
Use Playwright cli, goto website www.saucedemo.com , login with existing credentials. Complete the checkout process. 
Record a video, save it using –filename=demo.mp4
```

**Steps:**
1. Using Playwright cli ,  navigate to www.saucedemo.com
2. Login with existing credentials
3. Complete the checkout process
4. Record a video, Save the recording as `demo.mp4`

### Prompt 2: Advanced Recording with Trace & Screenshots

```
 For previous prompt, record a trace with screenshots=true, snapshots=true, save as trace.zip 
```

```bash
playwright-cli run \
  --url www.saucedemo.com \
  --trace \
  --screenshots=true \
  --snapshots=true \
  --trace-file=trace.zip
```

### Prompt 3: View Trace File

```bash
npx playwright show-trace trace.zip
```

---

## 🔗 Reference URLs

- **Playwright CLI Documentation:** https://github.com/microsoft/playwright-cli
- **Agent Skills:** https://agentskills.io/home

---




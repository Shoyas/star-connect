# StarConnect

The Star Connect Platform is an innovative web-based solution designed to bridge
the gap between users and verified experts across various fields. It offers diverse
services, including text messages, personalized video responses, and interactive
group call sessions. A standout feature of the platform is the Star Wish module,
enabling users to request customized video messages tailored for special occasions
or personal needs. This document provides a comprehensive overview of the
platform’s functional requirements, detailing user and expert workflows, payment
and earnings management, scheduling capabilities, and communication processes to
ensure a seamless and engaging user experience.

## How to run this project

1. Copy the environment variables file:

1. Clone the repository:

```bash
git clone "github-repository-link"
```

2. Install dependencies:

```bash
npm install
```

3. For development:

```bash
npm run dev
```

4. For build the project before production:

```bash
npm run build
```

5. For production:

```bash
npm start

```

✅ Testing Everything
Test 1 — Check ESLint manually

```bash
npm run lint
```

👉 See if ESLint shows warnings/errors.

Test 2 — Auto-fix ESLint issues

```bash
npm run lint:fix
```

👉 ESLint should fix as much as it can automatically.

Test 3 — Format your code

```bash
npm run format
```

👉 Prettier should reformat everything cleanly.

Test 4 — Git Commit Testing (Husky)
Modify a .ts or .tsx file badly (wrong spacing, etc.).

```bash
git add .

git commit -m "Here will be your First Commit"
```

👉 Husky will automatically run lint-staged and fix or block commit if errors.
If everything is clean → commit will happen successfully.

🎯 Full Commands Summary
Task
Command
Install all tools
npm install -D eslint prettier eslint-config-prettier eslint-plugin-prettier prettier-plugin-tailwindcss husky lint-staged
Initialize husky
npx husky install
Prepare husky after install
npm run prepare
Add husky pre-commit hook
npx husky add .husky/pre-commit "npx lint-staged"
Lint check manually
npm run lint
Fix lint errors
npm run lint:fix
Format code with prettier
npm run format

✅ Folder Structure

# Place here the folder structure

# 🌟 StarConnect

> **"Bridging Dreams with Experts"**

The **StarConnect Platform** is an innovative web-based solution that connects users with verified experts across diverse fields.  
Whether it's text messaging, personalized video responses, interactive group calls, or special **Star Wishes**, StarConnect makes every interaction **seamless, meaningful, and engaging**.

---

## 🚀 Features

- 📩 Direct Text Messaging with Experts
- 🎥 Personalized Video Responses
- 📞 Interactive Group Call Sessions
- 🌠 **Star Wish** – Request customized videos for special occasions
- 💳 Secure Payments & Earnings Management
- 📅 Smart Scheduling System
- 📬 Seamless Communication & Notifications

---

## 🛠️ How to Run the Project

Follow these simple steps to set up and run **StarConnect** locally:

### 1. Clone the Repository

```bash
git clone "your-github-repository-link"
```

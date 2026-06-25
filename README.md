# El Safwa Cargo and Export Website

This repository contains the source code for the official website of El Safwa Cargo and Export ([elsafwacargo.com](https://elsafwacargo.com)). 

It is a multi-lingual Single Page Application (SPA) built using React, TypeScript, and Styled Components.

---

## 📄 License & Restrictions

**Copyright © 2026 El Safwa Cargo and Export. All rights reserved.**

This project is **proprietary, confidential, and closed-source**. You do not have permission to copy, modify, distribute, publish, or use the source code, assets, or documentation of this website for any purpose without explicit written consent from El Safwa Cargo and Export.

For details, see the [LICENSE](file:///Users/shereef/Dev/website/LICENSE) file in the root directory.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Routing**: [React Router v7](https://reactrouter.com/)
- **Styling**: [Styled Components](https://styled-components.com/)
- **Internationalization (i18n)**: [i18next](https://www.i18next.com/) & [react-i18next](https://react.i18next.com/)
- **Formatting & Linting**: [Prettier](https://prettier.io/) & [ESLint](https://eslint.org/)

---

## 📁 Directory Structure

```
├── .github/             # GitHub workflow configurations
├── build/               # Target output for production builds
├── public/              # Static assets (images, icons, robots.txt, etc.)
├── src/                 # Application source code
│   ├── components/      # Shared/reusable React components
│   ├── pages/           # Page-level components/views
│   ├── locales/         # Translation JSON files (en, ar, fr, it)
│   ├── App.tsx          # Main React Application routing & layout
│   ├── i18n.ts          # Localization setup and language detection
│   └── index.tsx        # React entrypoint
├── eslint.config.mjs    # ESLint configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Project metadata and dependencies
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (version 18+ recommended) and npm installed.

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Local Development

To spin up a local development server with hot-reloading:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Formatting and Linting

To check and enforce style rules:

```bash
# Run ESLint to find issues
npm run lint

# Format codebase with Prettier
npm run format

# Verify formatting without modifying files
npm run format:check
```

### Testing

Run the test suite using Jest:

```bash
npm run test
```

---

## 🌐 Localization (i18n)

The site supports the following languages:
- 🇺🇸 **English** (`en`)
- 🇪🇬 **Arabic** (`ar` - Right-to-Left layout)
- 🇫🇷 **French** (`fr`)
- 🇮🇹 **Italian** (`it`)

Localization is managed in [src/i18n.ts](file:///Users/shereef/Dev/website/src/i18n.ts) and reads JSON files in [src/locales/](file:///Users/shereef/Dev/website/src/locales/). If you add new key-value pairs to translations, ensure they are updated across all JSON translation files to maintain consistency.

---

## 🚢 Deployment

The project is configured to deploy to **GitHub Pages**.

To deploy manually (this will automatically run `npm run build` and push files to the `gh-pages` branch):

```bash
npm run deploy
```

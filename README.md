# Algolia Search + React Demo Application

## Live demo
```
https://fanciful-swan-0c60a6.netlify.app/
```
## Folder Structure

    .
    ├── components              # Contains stateless functional components(ui only makes it easier to test + component driven )
    ├── components-algolia      # Augment our stateless component with algolia state logic
    ├── constants               # Define app constants(preferably create a different file for each feature)
    ├── hooks                   # Contains reusable statefull logic that is shared across the app
    ├── hocs                    # Contains Higher order components that are used across the app
    ├── api                     # Contains any external api logic and exposed as a set of hooks 
    ├── pages                   # Contains vite pages code
    ├── styles                  # UnoCSS global styles definition
    └── README.md

## Setup
### Pre-requirements
For Node.js, I strongly suggest using NVM (Node Version Manager).

We use pnpm for dependency management, install instructions are available at https://pnpm.io/installation

### Install Dependencies
```bash
npx pnpm install
```

### Running it in dev mode
Everything is set. Let's run it!

```bash
npx pnpm run dev
```

### Starting storybook

```bash
npx pnpm run storybook
```

### Run tests
```bash
npx pnpm run test
```

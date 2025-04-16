# Next.js Project Template

A standardized baseline project template with all common dependencies, configurations, and boilerplate code pre-configured for starting new UI projects with consistent architecture and reduced setup time.

## Features

- **Next.js 14+ with App Router** and TypeScript
- **State Management** using Context API
- **Styling** with Tailwind CSS
- **Component Library** integration with Shadcn UI
- **Routing** with React Router
- **Form Handling** with Formik and Zod validation
- **API Integration** with Axios and React Query
- **Testing** with Vitest and Playwright
- **Linting and Formatting** with ESLint, Prettier and Husky
- **CI/CD Pipeline** configuration for Bitbucket
- **Code Generation** with Plop.js

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:

```bash
git clone [repository-url] my-project
cd my-project
```

2. Install dependencies:

```bash
yarn
```

3. Run the development server:

```bash
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) to see your application

## Project Structure

```
src/
├── app/            # Next.js App Router pages
├── components/
│   ├── shared/     # Reusable components
│   ├── layout/     # Layout components
│   ├── forms/      # Form components
│   └── ui/         # UI components from Shadcn
├── context/        # Context API providers
├── features/       # Feature-based modules
├── hooks/          # Custom React hooks
├── services/       # API services
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── lib/            # Utility libraries
```

## Core Dependencies

```
"dependencies": {
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.16.0",
  "@tanstack/react-query": "^4.35.3",
  "axios": "^1.5.0",
  "formik": "^2.4.5",
  "zod": "^3.22.2",
  "zod-formik-adapter": "^1.2.0",
  "class-variance-authority": "^0.7.0",
  "clsx": "^2.0.0",
  "tailwind-merge": "^2.0.0",
  "lucide-react": "^0.292.0"
}
```

## Development Dependencies

```
"devDependencies": {
  "typescript": "^5.2.2",
  "tailwindcss": "^3.3.5",
  "postcss": "^8.4.31",
  "autoprefixer": "^10.4.16",
  "shadcn": "^0.1.0",
  "eslint": "^8.52.0",
  "eslint-config-next": "^14.0.0",
  "prettier": "^3.0.3",
  "husky": "^8.0.3",
  "lint-staged": "^15.0.2",
  "vitest": "^0.34.6",
  "@testing-library/react": "^14.0.0",
  "@testing-library/jest-dom": "^6.1.4",
  "@testing-library/user-event": "^14.5.1",
  "@vitejs/plugin-react": "^4.1.0",
  "jsdom": "^22.1.0",
  "@playwright/test": "^1.40.0",
  "plop": "^4.0.0"
}
```

## Available Scripts

- **Development**

  - `yarn dev`: Start the development server
  - `yarn build`: Build the application for production

- **Testing**

  - `yarn test`: Run all tests
  - `yarn test:watch`: Run tests in watch mode
  - `yarn test:e2e`: Run end-to-end tests with Playwright

- **Code Quality**

  - `yarn lint`: Lint the codebase
  - `yarn format`: Format code with Prettier
  - `yarn typecheck`: Check TypeScript types

- **Code Generation**
  - `yarn generate`: Run Plop.js generators

## Configuration Files

- **Next.js**: `next.config.js`
- **TypeScript**: `tsconfig.json`
- **Tailwind**: `tailwind.config.js`
- **ESLint**: `.eslintrc.json`
- **Prettier**: `.prettierrc`
- **Vitest**: `vitest.config.ts`
- **Playwright**: `playwright.config.ts`
- **Plop**: `plopfile.js`

## Environment Variables

Create the following environment files:

- `.env.development` - Development environment
- `.env.test` - Test environment
- `.env.production` - Production environment

Example:

```
NEXT_PUBLIC_API_URL=https://api.yourdomain.com

```

## Learn More

To learn more about the technologies used in this template, please refer to their documentation:

- [Next.js](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Formik](https://formik.org/docs)
- [Zod](https://zod.dev)
- [React Query](https://tanstack.com/query/latest)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)

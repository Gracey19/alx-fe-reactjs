# ALX Front-End: React App Setup (Task 0)

This project documents my first React app setup using Vite as part of the ALX Software Engineering program.

## What I Learned

- How to create and clone a GitHub repository
- How to use the terminal to navigate folders and run commands
- How to scaffold a React app using Vite
- The difference between `npm install` and `npm run dev`
- How to run a local development server at `localhost:5173`
- What JSX is and how it renders in the browser
- How to troubleshoot typos and terminal errors
- That Vite uses Rollup under the hood for fast builds

## Commands I Used

```bash
git clone https://github.com/Gracey19/alx-fe-reactjs.git
cd alx-fe-reactjs
npm create vite@latest alx-react-app -- --template react
cd alx-react-app
npm install
npm run dev



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# ALX Front-End: Task 1 – Modify JSX in a Pre-built React Component

## What I Did

- Created a new file: `WelcomeMessage.jsx` inside `src/components`
- Wrote a React component using JSX
- Changed the `<h1>` tag to:  
  `"Hello everyone, I am learning React at ALX!"`
- Added a new `<p>` tag with the message:  
  `"I am learning about JSX!"`
- Imported and rendered the component inside `App.jsx`
- Ran the app using `npm run dev` and confirmed the changes at `localhost:5173`

## What I Learned

- JSX is like HTML inside JavaScript — it powers React components
- Components are reusable blocks that return UI
- How to import and use a component inside another
- How to run and test changes live using Vite

## Commands I Used

```bash
cd alx-fe-reactjs/alx-react-app
npm run dev



# ALX Front-End: Task 2 – Create Specific Components in a React Application

## What I Did

- Created three new React components inside `src/components`:
  - `Header.jsx` → Displays: `<h1>My Favorite Cities</h1>`
  - `MainContent.jsx` → Displays: `<p>I love to visit New York, Paris, and Tokyo.</p>`
  - `Footer.jsx` → Displays: `<p>© 2023 City Lovers</p>`
- Imported all three components into `App.jsx`
- Rendered them in the correct order: `<Header />`, `<MainContent />`, `<Footer />`
- Verified the output in the browser at `localhost:5173`

## What I Learned

- How to create functional components in React
- How to organize components inside a shared folder
- How to import and use multiple components in one app
- How JSX structures content inside each component

## Commands I Used

```bash
cd alx-fe-reactjs/alx-react-app
npm run dev


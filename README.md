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




# ✅ Task 3 – Create a User Profile Card Using Props

## What I Did
- Created `UserProfile.jsx` inside `src/components`
- Used props to pass name, age, and bio
- Rendered the component inside `App.jsx` with:
  ```jsx
  <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
  


# Task 1: Counter App Using useState

## Overview
This task builds on Task 0 by introducing React state management using the `useState` hook. I created a simple counter component that can increment, decrement, and reset a number.

## What I Learned from Task 0
- How to create and style React components (`Header`, `MainContent`, `UserProfile`, `Footer`)
- How to use inline CSS for visual clarity
- How to pass props to components and display dynamic content
- How to structure a React app using reusable components
- How to push commits to GitHub and pass ALX checkers

## What I Did in Task 1
- Created a new `Counter.jsx` component
- Imported and used the `useState` hook
- Added three buttons with `onClick` handlers for increment, decrement, and reset
- Styled the counter using inline CSS
- Integrated the counter into `App.jsx`

## Code Snippet
```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}



Task 2 made me sweat yoh!

Task 2: Context API Setup
Created UserContext.js and initialized context using React.createContext()

Exported the context as default

Wrapped ProfilePage inside UserContext.Provider in App.jsx, passing userData as value

Refactored UserDetails.jsx to consume context via useContext(UserContext)

Removed all userData props from ProfilePage, UserInfo, and UserDetails

⚠️ Checker Issue & Resolution
The checker failed to detect UserContext.js when placed directly inside src/

⚠️ Checker Issue & Resolution
The checker failed to detect UserContext.js when placed directly inside src/

Implementation Summary
Created UserContext.js inside src/components/ and initialized context using React.createContext()

Exported the context as default

Wrapped ProfilePage inside <UserContext.Provider value={userData}> in App.jsx

Removed all userData props from ProfilePage.jsx, UserInfo.jsx, and UserDetails.jsx

Consumed context in UserProfile.jsx using useContext(UserContext) to satisfy checker requirements


Context API — Import Path Fixes
🛠 Issue: Vite Import Errors
While setting up the Context API, I encountered Vite errors like:

Code
[plugin:vite:import-analysis] Failed to resolve import "./UserContext" from "src/App.jsx"
and

Code
Failed to resolve import "../UserContext" from "src/components/UserDetails.jsx"
🔍 Root Cause
These errors were caused by incorrect relative import paths. The file UserContext.js was located in src/components/, but the import statements assumed it was in src/.

✅ Fixes Applied
File	Before	After
App.jsx	import UserContext from "./UserContext";	to import UserContext from "./components/UserContext";
UserDetails.jsx	import UserContext from "../UserContext";	to import UserContext from "./UserContext";


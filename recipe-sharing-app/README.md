# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



# Recipe Sharing App

This is a simple React application for sharing recipes. It allows users to add new recipes with a title and description, and view a list of all submitted recipes.

## 🚀 Features

- Add new recipes
- View all recipes
- State management using Zustand

## 🛠️ Technologies Used

- React (via Vite)
- Zustand (for global state)
- JavaScript
- CSS (optional styling)

## 📦 Project Structure


## 🧠 Zustand Store

The app uses Zustand to manage the list of recipes. The store includes:

- `recipes`: an array of recipe objects
- `addRecipe(newRecipe)`: adds a new recipe to the list
- `setRecipes(recipes)`: replaces the entire list

## 🧪 How to Run the App

1. Clone the repository:
   ```bash
   git clone https://github.com/Gracey19/recipe-sharing-app.git
   cd recipe-sharing-app


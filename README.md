# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
# GIT

## Base GIT setup:
- git config --global user.name "github-username"
- git config --global user.email "mail@gmail.com"

## Start new project:
- git init
- git add README.md (git add .)
- git commit -m "INIT: init study project"
- git branch -M main (not necassary)
- git remote add origin https://github.com/AlexShyshko/react-course.git
- git push -u origin main (git push - after first upstreaming)

## Work wit GIT:
- git checkout -b ＜new-branch＞ - create new branch and move to it

## Useful commands:
- pwd - check path

# VS Code

## Extensions:
- Auto Close Tag
- Auto Complete Tag
- Auto Rename Tag
- GitLens — Git supercharged
- Live Server
- Prettier - Code formatter

## Useful commands:
- CTRL + / - comment/uncomment line
- SHIFT + ALT + A - comment/uncomment block /* */
- CTRL + K + C - comment block //
- CTRL + K + U - uncomment block //
- CTRL + , - settings
- CTRL + ` - open terminal
- CTRL + SHIFT + P - open command pallete
- CTRL + K CTRL + S - hot keys
- SHIFT + ALT + F - format file

## Hints:
- 

## NPX:
- npm install -g npx

## HUSKY:
- npm install --save-dev husky
- npx husky init

# REACT

## VITE new project:
- npm create vite@latest - initialize
- SPECIFY: project name, template
- cd react-project - move to the project directory
- npm install - install VITE
- npm run dev - run DEV

## VITE after DEV ran:
- H + ENTER - show help
- R + ENTER - restart the server
- U + ENTER - show server url   
- O + ENTER - open in browser   
- C + ENTER - clear console
- Q + ENTER - quit

## ESLint:
- npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev - install in project
- npm init @eslint/config@latest - create config
- npm install -D prettier eslint-config-prettier eslint-plugin-prettier - add prettier
- npm install eslint-plugin-react-compiler --save-dev - intall compiler with rules
# Getting Started with Create React App

## Deployment

portfolio-site-123.netlify.app

**Netlify**

```bash

pnpm i gh-pages --save-dev
netlify deploy
netlify deploy --prod

npm run start
npm run build
```

- This project is hosted on Netflify and connected to the corresponding Github repository for automatic deployment

## Setup

**Starting in parent directory:**

```bash
npx create-react-app . --template typescript`
cd portfolio
npm i -D tailwindcss postcss autoprefixer
npm i react-router-dom react-icons
npm install react-icons --save
npm install --save chart.js react-chartjs-2
bash npx tailwindcss init -p
```

**In tailwind.config.js, add:**

```javascript
content: [
'./src/**/*.{js,jsx,ts,tsx}',
],
```

```bash
npm run build

git add .
git commit -m "first commit"
git push origin main
npm install firebase
```

Not used (but for "hosting" with Firebase, must use):
`npm install -g firebase-tools`

Sign in to Google
`firebase login`

Initialize a project
`firebase init`

Deploy
`firebase deploy` (if deploying with Firebase)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
Let's learn!

### Screen Size Breakpoints:

- Small: 640px

- Medium: 1007px

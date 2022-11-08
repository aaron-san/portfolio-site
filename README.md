# Getting Started with Create React App

## Setup

**Starting in parent directory:**

`npx create-react-app . --template typescript`

`cd portfolio`

`npm i -D tailwindcss postcss autoprefixer`

`npm i react-router-dom react-icons`

`npm install react-icons --save`

`bash npx tailwindcss init -p`

**In tailwind.config.js, add:**

```javascript
content: [
'./src/**/*.{js,jsx,ts,tsx}',
],
```

**Next we need to add the Tailwind directives to the "src/index.css" file, add the following to the top of the file:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

`npm run build`

`git add .`

`git commit -m "first commit"`

`git push origin main`

`npm install firebase`

Not used (but for hosting with Firebase, must use):
`npm install -g firebase-tools`

Sign in to Google
`firebase login`

Initialize a project
`firebase init`

Deploy
`firebase deploy` (if deploying with Firebase)

<!-- `netlify deploy` --> Manually connected Netflify to github repository for automatic deployment

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
Let's learn!

### Screen Size Breakpoints:

- Small: 640px

- Medium: 1007px

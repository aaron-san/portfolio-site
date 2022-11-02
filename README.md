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

`git add .`

`git commit -m "first commit"`

`git push origin main`

`npm run build`

`netlify deploy`

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
Let's learn!

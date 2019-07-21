This repo is a repo to reproduce a bug when trying to transpile source code using @emotion/style.
There are 2 folders:
* using the bable cli
* using babel programmatic

The source code in both folders (`index.js`) is the same.

running the cli version:
```bash
cd babel-cli
npm i
npm run build
```

running the programmatic version:
```bash
cd babel-programmatic
npm i
node run-babel.js
```
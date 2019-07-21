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

when running the cli version, everything works fine.
When running the programmatic version you will see an error:
```
/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:341
  var finalPath = filename === rootPath ? 'root' : filename.slice(rootPath.length);
                                                            ^

TypeError: Cannot read property 'slice' of undefined
    at getTargetClassName (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:341:61)
    at getStyledOptions (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:515:78)
    at /private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:685:54
    at Array.forEach (<anonymous>)
    at /private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:643:26
    at Object.macroWrapper [as @emotion/styled] (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-macros/dist/index.js:61:12)
    at PluginPass.ImportDeclaration (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/babel-plugin-emotion/dist/babel-plugin-emotion.cjs.dev.js:891:45)
    at newFn (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/@babel/traverse/lib/visitors.js:193:21)
    at NodePath._call (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/@babel/traverse/lib/path/context.js:53:20)
    at NodePath.call (/private/tmp/bit-emotion-reproduce/babel-programmatic/node_modules/@babel/traverse/lib/path/context.js:40:17)
```

Removing those lines from the source code, will make the error go away:
```js
const Container = styled.div`
  height: ${({ size }) => size ? `${size}rem` : `100%`};
  width: ${({ size }) => size ? `${size}rem` : `100%`};
  animation: ${fullSpin} 750ms linear infinite;
  margin: 0 auto;
`
```
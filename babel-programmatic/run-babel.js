const fs = require('fs');

const content = fs.readFileSync('./index.js');

const result = require('@babel/core').transform(content, {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ["@babel/plugin-proposal-class-properties",
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-proposal-object-rest-spread", 'babel-plugin-emotion']
})
console.log("result", result.code);
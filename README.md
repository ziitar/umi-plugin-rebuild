# umi-plugin-rebuild

[![NPM version](https://img.shields.io/npm/v/umi-plugin-rebuild.svg?style=flat)](https://www.npmjs.com/package/umi-plugin-rebuild)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-rebuild.svg?style=flat)](https://www.npmjs.com/package/umi-plugin-rebuild)

move dist files to a new directory after build.

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-rebuild', options],
  ],
}
```

## Options

```js
{
  source: 'dist',  //defualt 'dist' 待复制的目录名
  output: '_dist'  //defualt '_dist' 复制后的目录名
}
```

## LICENSE

MIT

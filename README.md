# umi-plugin-umi-plugin

[![NPM version](https://img.shields.io/npm/v/umi-plugin-umi-plugin.svg?style=flat)](https://npmjs.org/package/umi-plugin-umi-plugin)
[![NPM downloads](http://img.shields.io/npm/dm/umi-plugin-umi-plugin.svg?style=flat)](https://npmjs.org/package/umi-plugin-umi-plugin)

remove dist files to a new directory after build.

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-umi-plugin', options],
  ],
}
```

## Options

```js
{
	source: 'dist',  //defualt 'dist' 待复制的目录名
	output: '_dist'	 //defualt '_dist' 复制后的目录名
}
```

## LICENSE

MIT

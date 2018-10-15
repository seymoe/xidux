# [xidux](https://github.com/ximolang/xidux)

[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/ximolang/xidux)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ximolang/xidux/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/ximolang/xidux.svg?branch=master)](https://travis-ci.org/ximolang/xidux)
[![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/xidux)
[![NPM downloads](http://img.shields.io/npm/dm/xidux.svg?style=flat-square)](http://www.npmtrends.com/xidux)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/ximolang/xidux.svg)](http://isitmaintained.com/project/ximolang/xidux "Percentage of issues still open")

Redux实现

## 特性

- 无

**注意: 如果不同时使用 export 与 export default 可打开legacy模式，legacy模式下的模块系统可以兼容ie6-8，见rollup配置文件**

## 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | 安卓   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 23+  | 4+   | 6+   | 10+  | 5+   | 2.3+ | 0.10+ |

**注意：编译代码依赖ES5环境，对于ie6-8需要引入[es5-shim](http://github.com/es-shims/es5-shim/)才可以兼容，可以查看[demo/demo-global.html](../demo/demo-global.html)中的例子**

## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 使用者指南

通过npm下载安装代码

```bash
$ npm install --save xidux
```

如果你是node环境

```js
var base = require('xidux');
```

如果你是webpack等环境

```js
import base from 'xidux';
```

如果你是requirejs环境

```js
requirejs(['node_modules/xidux/dist/index.aio.js'], function (base) {
    // xxx
})
```

如果你是浏览器环境

```html
<script src="node_modules/xidux/dist/index.aio.js"></script>
```

## 文档
- [API](https://github.com/ximolang/xidux/blob/master/doc/api.md)

## 贡献者列表
[contributors](https://github.com/ximolang/xidux/graphs/contributors)

## 更新日志
[CHANGELOG.md](https://github.com/ximolang/xidux/blob/master/CHANGELOG.md)

## 计划列表
[TODO.md](https://github.com/ximolang/xidux/blob/master/TODO.md)

## 谁在使用

- 无
<!--
title: @exports
order: 320
author: yuer
-->

# @exports

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@exports <moduleName>
```

在 JSDoc3.3.0 或更高版本中，`<moduleName>` 可以包含 `module:` 前缀。在以前的版本中，必须忽略此前缀。

## 概述

使用 `@exports` 标签描述除由 JavaScript 模块的 `exports` 或 `module.exports` 属性外导出的任何内容。

## 实例

在模块中，当使用特定的 `exports` 模块，`@exports` 标签是不需要。JSDoc 会自动识别出该对象的导出成员。同样，JSDoc 会自动识别中的 Node.js 模块特定的 `module.exports` 属性。

CommonJS 模块:

```javascript
/**
 * A module that says hello!
 * @module hello/world
 */

/** Say hello. */
exports.sayHello = function() {
  return "Hello world";
};
```

Node.js 模块:

```javascript
/**
 * A module that shouts hello!
 * @module hello/world
 */

/** SAY HELLO. */
module.exports = function() {
  return "HELLO WORLD";
};
```

AMD 模块导出一个字面量对象：

```javascript
define(function() {
  /**
   * A module that creates greeters.
   * @module greeter
   */

  /**
   * @constructor
   * @param {string} subject - The subject to greet.
   */
  var exports = function(subject) {
    this.subject = subject || "world";
  };

  /** Say hello to the subject. */
  exports.prototype.sayHello = function() {
    return "Hello " + this.subject;
  };

  return exports;
});
```

如果模块导出使用的是除 `exports` 或 `module.exports` 之外的其他方法方式，使用 `@exports` 标签来说明哪些成员用于导出。

AMD 模块导出一个对象：

```js
define(function() {
  /**
   * A module that says hello!
   * @exports hello/world
   */
  var ns = {};

  /** Say hello. */
  ns.sayHello = function() {
    return "Hello world";
  };

  return ns;
});
```

## 相关链接

- [@module](./tags-module.md)
- [CommonJS Modules](./howto-commonjs-modules.md)
- [AMD Modules](./howto-amd-modules.md)

# @inheritdoc

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@inheritdoc
```

## 概述

`@inheritdoc` 标记表示应该从其父类继承其文档。JSDoc 注释中包含的任何其他标记都将被忽略。

提供此标记是为了与 [Closure Compiler](https://developers.google.com/closure/compiler/) 兼容。默认情况下，如果不向符号添加 JSDoc 注释，标识符将从其父级继承文档。

`@inheritdoc` 标记的存在意味着 [@override](./tags-override.md) 标记的存在。

## 实例

下面的例子显示了一个类的描述如何从它的父类继承文档。

一个类继承自他的父类：

```javascript
/**
 * @classdesc Abstract class representing a network connection.
 * @class
 */
function Connection() {}

/**
 * Open the connection.
 */
Connection.prototype.open = function() {
  // ...
};

/**
 * @classdesc Class representing a socket connection.
 * @class
 * @augments Connection
 */
function Socket() {}

/** @inheritdoc */
Socket.prototype.open = function() {
  // ...
};
```

省略 `Socket#open` 的 JSDoc 注 释，可以得到同样的结果。

不带 `@inheritdoc` 标记的继承文档:

```javascript
/**
 * @classdesc Abstract class representing a network connection.
 * @class
 */
function Connection() {}

/**
 * Open the connection.
 */
Connection.prototype.open = function() {
  // ...
};

/**
 * @classdesc Class representing a socket connection.
 * @class
 * @augments Connection
 */
function Socket() {}

Socket.prototype.open = function() {
  // ...
};
```

## 相关链接

- [@override](./tags-override.md)

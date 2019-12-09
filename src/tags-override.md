<!--
title: @override
order: 347
author: yuer
-->

# @override

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@override
```

## 概述

`@override` 标签指明一个标识符覆盖其父类同名的标识符。

这个标签为 [Closure Compiler](https://developers.google.com/closure/compiler/)提供了兼容性。默认情况下，JSDoc 自动识别，覆盖其父类同名的标识符。

如果您的 JSDoc 注释块包含 [@inheritdoc](./tags-inheritdoc.md) 标签，就不需要在包含 `@Override` 标签了。`@inheritdoc` 标签的存在就意味着 `@override` 的存在。

## 实例

下面的例子说明一个方法如何重写父类的方法。

重写父类方法：

```js
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

/**
 * Open the socket.
 * @override
 */
Socket.prototype.open = function() {
  // ...
};
```

## 相关链接

- [@inheritdoc](./tags-inheritdoc.md)
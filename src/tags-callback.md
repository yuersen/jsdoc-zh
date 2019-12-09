<!--
title: @callback
order: 308
author: yuer
-->

# @callback

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@callback <namepath>
```

## 概述

`@Callback` 标签提供回调函数（可传递给其他函数）的描述，包括回调的参数和返回值。可以包涵任何一个能提供给 [@method](./tags-function.md)标签。

一旦你定义了一个回调，你可以像 [@typedef](./tags-typedef.md) 标签所定义的自定义类型那样使用它。尤其是，你可以使用回调的名称作为类型名称。这样您可以使你明确指明函数参数应包含那个回调。

如果你想要一个回调显示为某个特定类的类型定义，可以给回调加一个 `namepath`，指示它是某个类的一个内部函数。还可以定义一个引用多个类引用的全局的回调类型。

## 实例

描述一个指定类回调:

```javascript
/**
 * @class
 */
function Requester() {}

/**
 * Send a request.
 * @param {Requester~requestCallback} cb - The callback that handles the response.
 */
Requester.prototype.send = function(cb) {
  // code
};

/**
 * This callback is displayed as part of the Requester class.
 * @callback Requester~requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

描述一个全局回调:

```javascript
/**
 * @class
 */
function Requester() {}

/**
 * Send a request.
 * @param {requestCallback} cb - The callback that handles the response.
 */
Requester.prototype.send = function(cb) {
  // code
};

/**
 * This callback is displayed as a global member.
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */
```

## 相关链接

- [@function](./tags-function.md)
- [@typedef](./tags-typedef.md)

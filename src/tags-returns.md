<!--
title: @returns
order: 356
author: yuer
-->

# @returns

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@return
```

## 语法

```
@return [{type}] [description]
```

## 概述

`@returns` 标记记录函数返回的值。

如果要记录生成器函数，请使用 [@yiels](./tags-yiels.md) 标记而不是此标记。

## 实例

返回值的类型:

```js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sum(a, b) {
  return a + b;
}
```

返回值的类型和描述:

```js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {number} Sum of a and b
 */
function sum(a, b) {
  return a + b;
}
```

返回多类型的值:

```js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @param {boolean} retArr If set to true, the function will return an array
 * @returns {(number|Array)} Sum of a and b or an array that contains a, b and the sum of a and b.
 */
function sum(a, b, retArr) {
  if (retArr) {
    return [a, b, a + b];
  }
  return a + b;
}
```

返回 `Promise`:

```js
/**
 * Returns the sum of a and b
 * @param {number} a
 * @param {number} b
 * @returns {Promise} Promise object represents the sum of a and b
 */
function sumAsync(a, b) {
  return new Promise(function(resolve, reject) {
    resolve(a + b);
  });
}
```

## 相关链接

- [@param](./tags-param.md)
- [@yields](./tags-yields.md)

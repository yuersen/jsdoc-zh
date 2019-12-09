<!--
title: @typedef
order: 366
author: yuer
-->

# @typedef

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@typedef [<type>] <namepath>
```

## 概述

`@typedef` 标签在描述自定义类型时是很有用的，特别是如果你要反复引用它们的时候。这些类型可以在其它标签内使用，如 `@type` 和 `@param`。

使用 `@callback` 标签表明回调函数的类型。

## 实例

这个例子定义了一个联合类型的参数，表示可以包含数字或字符串。

使用 `@typedef` 标签：

```
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
function setMagicNumber(x) {
}
```

这个例子定义了一个更复杂的类型，一个具有多个属性的对象，并设置了它的 `namepath`，这样它将与使用该类型的类一起显示。因为类型定义实际上不是由类公开的，所以通常将类型定义记录为内部成员。

使用 `@typedef` 记录类的复杂类型:

```
/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} WishGranter~Triforce
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

/**
 * A class for granting wishes, powered by the Triforce.
 * @class
 * @param {...WishGranter~Triforce} triforce - One to three {@link WishGranter~Triforce} objects
 * containing all three components of the Triforce.
 */
function WishGranter(triforce) {}
```

## 相关链接

- [@callback](./tags-callback.md)
- [@param](./tags-param.md)
- [@type](./tags-type.md)

<!--
title: @static
order: 359
author: yuer
-->

# @static

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@static
```

## 概述

`@static` 标记表示符号包含在父项中，可以在不实例化父项的情况下访问。

使用 `@static` 标记将覆盖符号的默认作用域，但有一个例外：全局作用域中的符号将保持全局。

## 实例

下面的例子可以写成 `"@function MyNamespace.myFunction"` 并省略 `@memberof` 和 `@static` 标签，他们的效果是一样的.

```
/** @namespace MyNamespace */

/**
 * @function myFunction
 * @memberof MyNamespace
 * @static
 */
```

下面的示例强制模块的内部成员被描述为静态成员。

使用 `@static` 来覆盖默认作用域：

```
/** @module Rollerskate */

/**
 * The 'wheel' variable is documented as Rollerskate.wheel
 * rather than Rollerskate~wheel.
 * @static
 */
var wheel = 1;
```

## 相关链接

- [@global](./tags-global.md)
- [@inner](./tags-inner.md)
- [@instance](./tags-instance.md)
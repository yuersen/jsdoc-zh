<!--
title: @throws
order: 362
author: yuer
-->

# @throws

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 别名

```
@exception
```

## 语法

```
@throws free-form description
@throws {<type>}
@throws {<type>} free-form description
```

## 概述

`@throws` 标记记录函数可能引发的错误。可以在一个 JSDoc 注释中多次包含 `@throws` 标记。

## 实例

使用带有类型的 `@throws` 标记:

```js
/**
 * @throws {InvalidArgumentException}
 */
function foo(x) {}
```

使用带有描述的 `@throws` 标记:

```js
/**
 * @throws Will throw an error if the argument is null.
 */
function bar(x) {}
```

使用带有类型和描述的 `@throws` 标记:

```js
/**
 * @throws {DivideByZero} Argument x must be non-zero.
 */
function baz(x) {}
```

<!--
title: @function
order: 324
author: yuer
-->

# @function

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 别名

```
@func
@method
```

## 语法

```
@function [<functionName>]
```

## 概述

将一个对象标记为一个函数，即使在解析器看来它可能不是一个函数。它将 doclet 的 [@kind](./tags-kind.md) 设置为 `'function'`。

## 实例

使用 `@function` 标记为一个函数：

```
/** @function */
var paginate = paginateFactory(pages);
```

如果没有 `@function` 标记，`paginate` 对象将被记录为泛型对象（一个 [@member](./tags-member.md)），因为从检查代码行中无法判断 `paginate` 在运行时将保存哪种类型的值。

使用带函数名的 `@function`：

```
/** @function myFunction */

// the above is the same as:
/** @function
 * @name myFunction 
 */
```

## 相关链接

- [@kind](./tags-kind.md)
- [@member](./tags-member.md)
- [@name](./tags-name.md)


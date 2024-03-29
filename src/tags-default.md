<!--
title: @default
order: 314
author: yuer
-->

# @default

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 别名

```
@defaultvalue
```

## 语法

```
@default [<some value>]
```

## 概述

`@default` 标签记录标识的赋值。可以在标签后面跟上他的值，或者当值是一个唯一被分配的简单值(可以是：一个字符串，数字，布尔值或null)的时候，可以让JSDoc从源代码中获取值，自动记录。

## 实例

在本实例中,一个常量被记录。该常数的值为 `0xff0000`。通过添加 `@default` 标签，这个值将自动添加到文档。

```
/**
 * @constant
 * @default
 */
const RED = 0xff0000;
```

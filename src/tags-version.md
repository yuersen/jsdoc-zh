<!--
title: @version
order: 368
author: yuer
-->

# @version

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@version <version>
```

## 概述

`@version` 标签后面的文本将被用于表示该项的版本。

## 实例

使用 `@version` 标签：

```
/**
 * Solves equations of the form a * x = b. Returns the value
 * of x.
 * @version 1.2.3
 * @tutorial solver
 */
function solver(a, b) {
  return b / a;
}
```

## 相关链接

- [@since](./tags-since.md)
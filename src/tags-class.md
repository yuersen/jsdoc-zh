<!--
title: @class
order: 309
author: yuer
-->

# @class

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@constructor
```

## 语法

```
@class [<type> <name>]
```

## 概述

`@class` 标记将函数标记为构造函数，这意味着要使用 `new` 关键字调用它以返回实例。

## 实例

一个函数构建一个 `Person` 实例：

```javascript
/**
 * Creates a new Person.
 * @class
 */
function Person() {}

var p = new Person();
```

## 相关链接

- [@constructs](./tags-constructs.md)

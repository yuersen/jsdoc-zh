<!--
title: @constant
order: 311
author: yuer
-->

# @constant

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@const
```

## 语法

```
@constant [<type> <name>]
```

## 概述

`@constant` 标记用于将文档标记为属于常量的符号。

## 实例

在这个实例中我们记录一个字符串常量。注意，虽然代码使用 `const` 关键字，对于 JSDoc 来说，这不是必需的。如果你的 JavaScript 宿主环境尚不支持常量声明，`@const` 描述可以很有效地用在 `var` 声明上。

一个字符串常量表示红色：

```javascript
/** @constant
    @type {string}
    @default
*/
const RED = "FF0000";

/** @constant {number} */
var ONE = 1;
```

注意，实例中在 [@type](./tags-type.md) 标签中提供了一个类型是可选的。另外可选的 [@default](./tags-default.md) 标签用在这里也一样，这里将自动添加任何指定的值（例如， 'FF0000'）给文档。

## 相关链接

- [@type](./tags-type.md)
- [@default](./tags-default.md)

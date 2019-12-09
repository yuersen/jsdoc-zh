<!--
title: @name
order: 345
author: yuer
-->

# @name

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@name <namePath>
```

## 概述

`@name` 标签强制 JSDoc 使用这个给定的名称，而忽略实际代码里的名称。这个标签最好用于"虚拟注释"，而不是在代码中随时可见的标签，如在运行时期间产生的方法。

当您使用 `@name` 标签，必须提供额外的标签，来告诉 JSDoc 什么样的标识符将被文档化;该标识符是否是另一个标识符的成员，等等。如果不提供这些信息，标识符将不会被正确文档化。

警告：通过使用 `@name` 标签告诉 JSDoc 忽略实际代码，隔离文档注释。在许多情况下，最好是使用 [@alias](./tags-alias.md) 标签代替，这个标签只是改变了标识符的名称，但是保留了标识符的其他信息。

## 实例

下面的例子演示了如何使用 `@name` 标签描述一个函数，JSDoc 通常不会识别。

使用 `@name` 标签：

```
/**
 * @name highlightSearchTerm
 * @function
 * @global
 * @param {string} term - The search term to highlight.
 */
eval("window.highlightSearchTerm = function(term) {};")
```

## 相关链接

- [在 JSDoc 3中使用名称路径](./about-namepaths.md)
- [@alias](./tags-alias.md)

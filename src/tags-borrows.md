<!--
title: @borrows
order: 307
author: yuer
-->

# @borrows

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@borrows <that namepath> as <this namepath>
```

## 概述

`@borrows` 标签允许将另一个标识符的描述添加到当前描述。

如果你不止在一个地方引用同一个函数，但是你又不想重复添加同样的文档描述到多个地方，这个时候非常有用。

## 实例

在这个例子中，`trstr` 函数存在文档，但 `util.trim` 只是使用不同的名称引用相同的功能。

例如，复制 `trstr` 的文档描述给 `util.trim`:

```javascript
/**
 * @namespace
 * @borrows trstr as trim
 */
var util = {
  trim: trstr
};

/**
 * Remove whitespace from around a string.
 * @param {string} str
 */
function trstr(str) {}
```

<!--
title: @readonly
order: 354
author: yuer
-->

# @readonly

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@readonly
```

## 概述

标记一个标识符为只读。JSDoc 不会检查某个代码是否真是只读的，只要标上 `@readonly`，在文档中就体现为只读的。

## 实例

使用 `@readonly` 标签：

```
/**
 * A constant.
 * @readonly
 * @const {number}
 */
const FOO = 1;
```

带有 `@readonly` 标签的 `getter`:

```js
/**
 * Options for ordering a delicious slice of pie.
 * @namespace
 */
var pieOptions = {
  /**
   * Plain.
   */
  plain: "pie",
  /**
   * A la mode.
   * @readonly
   */
  get aLaMode() {
    return this.plain + " with ice cream";
  }
};
```

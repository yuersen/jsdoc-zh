<!--
title: @example
order: 319
author: yuer
-->

# @example

## 目录

- [概述](#概述)
- [实例](#实例)

## 概述

提供如何使用文档化项的示例。此标记后面的文本将显示为突出显示的代码。

## 实例

注意，一个 doclet 中可以同时使用多个 `@example` 标签。

```javascript
/**
 * Solves equations of the form a * x = b
 * @example
 * // returns 2
 * globalNS.method1(5, 10);
 * @example
 * // returns 3
 * globalNS.method(5, 15);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
  return b / a;
};
```

`@example` 标签后面可以添加 `<caption></caption>` 标签作为示例的标题。

```javascript
/**
 * Solves equations of the form a * x = b
 * @example <caption>Example usage of method1.</caption>
 * // returns 2
 * globalNS.method1(5, 10);
 * @returns {Number} Returns the value of x for the equation.
 */
globalNS.method1 = function (a, b) {
  return b / a;
};
```

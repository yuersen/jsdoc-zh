<!--
title: @async
order: 304
author: yuer
-->

# @async

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@async
```

## 概述

`@async` 标记表示函数是异步的，这意味着它是使用语法 `async function foo () {}` 声明的。不要将此标记用于其他类型的异步函数，例如提供回调的函数。JSDoc 3.5.0 及更高版本中提供了此标记。

一般来说，不需要使用此标记，因为 JSDoc 会自动检测异步函数并在生成的文档中标识它们。但是，如果您正在为代码中没有出现的异步函数编写虚拟注释，则可以使用此标记告诉JSDoc该函数是异步的。

## 实例

以下示例显示使用 `@async` 标记的虚拟注释：

```javascript
/**
 * Download data from the specified URL.
 *
 * @async
 * @function downloadData
 * @param {string} url - The URL to download from.
 * @return {Promise<string>} The data from the URL.
 */
```
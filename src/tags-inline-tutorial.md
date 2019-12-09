<!--
title: @tutorial
order: 332
author: yuer
-->

# @tutorial

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
{@tutorial tutorialID}
[link text]{@tutorial tutorialID}
{@tutorial tutorialID|link text}
{@tutorial tutorialID link text (after the first space)}
```

## 概述

`{@tutorial}` 内联标记创建指向您指定的教程标识符的链接。使用 `{@tutorial}` 标记时，还可以使用几种不同格式之一提供链接文本。如果不提供任何链接文本，JSDoc 将使用教程的标题作为链接文本。

如果需要链接到 `namepath` 或 `URL`，请使用 [{@link}](./tags-inline-link.md)内联标记，而不是 `{@tutorial}` 标记。

## 实例

以下示例显示了为 `{@tutorial}` 标记提供链接文本的所有方法。

提供链接文本:

```js
/**
 * See {@tutorial gettingstarted} and [Configuring the Dashboard]{@tutorial dashboard}.
 * For more information, see {@tutorial create|Creating a Widget} and
 * {@tutorial destroy Destroying a Widget}.
 */
function myFunction() {}
```

如果定义了所有这些教程，并且 `Getting Started` 教程的标题是 `“Getting Started”`，则上面的示例将生成类似于以下内容的输出：

```html
See <a href="tutorial-gettingstarted.html">Getting Started</a> and
<a href="tutorial-dashboard.html">Configuring the Dashboard</a>.
For more information, see <a href="tutorial-create.html">Creating a Widget</a> and
<a href="tutorial-destroy.html">Destroying a Widget</a>.
```

## 相关链接

- [@tutorial](./tags-tutorial.md)
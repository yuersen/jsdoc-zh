<!--
title: {@link}
order: 331
author: yuer
-->

# {@link}

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [链接格式化](#链接格式化)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
{@linkcode}
{@linkplain}
```

## 语法

```
{@link namepathOrURL}
[link text]{@link namepathOrURL}
{@link namepathOrURL|link text}
{@link namepathOrURL link text (after the first space)}
```

## 概述

`{@link}` 内联标记创建指向指定的 `namepath` 或 `URL` 的链接。使用 `{@link}` 标记时，还可以使用几种不同格式之一提供链接文本。如果不提供任何链接文本，JSDoc 将使用 `namepath` 或 `URL` 作为链接文本。

如果需要链接到教程，请使用 [{@tutorial}](./tags-tutorial.md) 内联标记而不是 `{@link}` 标记。

## 链接格式化

默认情况下，`{@link}` 生成标准的 HTML 锚点标记。但是，你可能更愿意在某些环节用等宽字体呈现，或指定单个链接的格式。您可以使用 `{@link}` 标签的同义词来控制链接的格式：

- `{@linkcode}`：强制使用等宽字体链接文本。
- `{@linkplain}`：强制显示为正常的文本，没有等宽字体链接文本。

您还可以在 JSDoc 的配置文件中设置下列选项之一;详情参见[配置 JSDoc](./about-configuring-jsdoc.md)：

- `templates.cleverLinks`: 如果设置为 `true`，链接 URL 使用普通的文本，并链接到代码中使用等宽字体。
- `templates.monospaceLinks`: 当设置为 `true` 时，除了用 `{@linkplain}` 标记创建的链接外，所有链接都使用一个单空间字体。

注意：尽管默认的 JSDoc 模板正确地呈现了所有这些标记，但是其他模板可能无法识别 `{@linkcode}` 和 `{@linkplain}` 标记。此外，其他模板可能会忽略链接呈现的配置选项。

## 实例

下面的例子显示了提供给 `{@link}` 标签链接文本的所有方式。

提供链接文本：

```
/**
 * See {@link MyClass} and [MyClass's foo property]{@link MyClass#foo}.
 * Also, check out {@link http://www.google.com|Google} and
 * {@link https://github.com GitHub}.
 */
function myFunction() {}
```

默认情况下，上面的例子中输出类似以下内容。

`@link` 标签输出：

```
See <a href="MyClass.html">MyClass</a> and <a href="MyClass.html#foo">MyClass's foo
property</a>. Also, check out <a href="http://www.google.com">Google</a> and
<a href="https://github.com">GitHub</a>.
```

如果配置属性 `templates.cleverLinks` 设置为 `true`，上面的例子会输出：

```
See <a href="MyClass.html"><code>MyClass</code></a> and <a href="MyClass.html#foo">
<code>MyClass's foo property</code></a>. Also, check out
<a href="http://www.google.com">Google</a> and <a href="https://github.com">GitHub</a>.
```

## 相关链接

- [使用配置文件配置 JSDOC](./about-configuring-jsdoc.md)
- [在 JSDoc 3中使用名称路径](./about-namepaths.md)

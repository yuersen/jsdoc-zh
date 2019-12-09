<!--
title: 使用Markdown插件
order: 108
author: yuer
-->

# 使用Markdown插件

## 目录

- [概述](#概述)
- [启用markdown插件](#启用markdown插件)
- [在额外的JSDoc标签中转换Markdown](#在额外的jsdoc标签中转换markdown)
- [剔除markdown默认处理的标签](#剔除markdown默认处理的标签)
- [用换行符换行文本](#用换行符换行文本)
- [添加ID属性到标题标签](#添加id属性到标题标签)


## 概述

JSDoc 包括 `Markdown` 插件，自动把 `Markdown` 格式文本转换成 HTML。你可以在任何 JSDoc 模板中使用这个插件。在 JSDoc3.2.2 及以后版本中，Markdown 插件使用了[marked Markdown](https://github.com/chjj/marked) 解析器。

**注意**：当您启用 `Markdown` 插件，一定要在 JSDoc 注释的每行前面加上前导星号。如果省略前导星号，JSDoc 解析器可能会删除用于 `Markdown` 格式化的星号。

默认情况下，JSDoc 会在以下 JSDoc 标签中查找 Markdown 格式的文本：

- [@author](./tags-author.md)
- [@classdesc](./tags-classdesc.md)
- [@description](./tags-description.md) (在 JSDoc 注释的开头包含未标记的描述)
- [@param](./tags-param.md)
- [@property](./tags-property.md)
- [@returns](./tags-returns.md)
- [@see](./tags-see.md)
- [@throws](./tags-throws.md)

## 启用Markdown插件

要启用 `Markdown` 插件，只要将字符串 `plugins/markdown` 添加到 [JSDoc 配置文件](./about-configuring-jsdoc.md)的 `plugins` 数组中即可。

示例，配置文件启用 Markdown 插件：

```
{
  "plugins": ["plugins/markdown"]
}
```

## 在额外的JSDoc标签中转换Markdown

默认情况下，`Markdown` 插件只处理特定 JSDoc 标签的 `Markdown` 文本。您可以通过添加一个 `markdown.tags` 属性到 JSDoc 配置文件中，来处理的其他标签中的 `Markdown` 文本。`markdown.tags` 属性包含一个额外的 doclet 属性的数组，这个 doclet 属性可以包含 `Markdown` 文本。 （在大多数情况下，doclet 属性的名称相同的标签名。然而，一些标签存储方式不一样;例如，`@param` 标签存储在的 doclet 的 `params` 属性。如果你不知道如何标签的文本存储在一个 doclet 中，运行 JSDoc 使用 `-X/--explain`，打印每个的doclet 到控制台）

例如，如果 `foo` 和 `bar` 标签接收在一个的 doclet 的 foo 和 bar 属性中存储值，你可以通过添加下面的设置到 JSDoc 配置文件，来使用 `Markdown` 处理这些标签。

转换’foo’和’bar’标签中的 Markdown:

```
{
  "plugins": ["plugins/markdown"],
  "markdown": {
    "tags": ["foo", "bar"]
  }
}
```

## 剔除Markdown默认处理的标签

为了防止 `Markdown` 插件处理任何默认 JSDoc 标签，添加一个 `markdown.excludeTags` 属性到 JSDoc 配置文件。该 `markdown.excludeTags` 属性包含不应该被 `Markdown` 文本处理的默认标签数组。

例如，从 `Markdown` 处理排除 `author` 标签：

```
{
  "plugins": ["plugins/markdown"],
  "markdown": {
    "excludeTags": ["author"]
  }
}
```

## 用换行符换行文本

默认情况下，`Markdown` 插件不处理换行符换行的文本。这是因为正常的 JSDoc 注释可以多行。如果更喜欢处理换行符换行的文本，设置 JSDoc 配置文件中的 `markdown.hardwrap` 属性为 `true`。此属性是在 JSDoc3.4.0 及更高版本中可用。

## 添加ID属性到标题标签

默认情况下，`Markdown` 插件不会给每个 HTML 标题标签添加 `id` 属性。想要标题标签文本自动添加 ID 属性，设置 JSDoc 配置文件 `markdown.idInHeadings` 属性为 `true`。此属性是在 JSDoc3.4.0 及更高版本中可用。

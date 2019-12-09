<!--
title: Tutorials 教程
order: 109
author: yuer
-->

# Tutorials 教程

## 目录

- [添加教程](#添加教程)
- [配置标题，顺序和层次结构](#配置标题，顺序和层次结构)
- [从API文档链接到教程](#从API文档链接到教程)
- [@tutorial 块标签](#@tutorial-块标签)
- [{@tutorial} 内联标签](#{@tutorial}-内联标签)

JSDoc 允许你的 API 文档的页面旁边包含教程。您可以使用此功能来为 API 提供详细的使用说明，如“入门”指南或实现一个功能的一步一步的过程。

## 添加教程

添加教程到 API 文档，可以通过 `--tutorials` 或 `-u` 选项运行 JSDoc，并提供 JSDoc 要搜索的教程目录。例如：

```
jsdoc -u path/to/tutorials path/to/js/files
```

JSDoc 在教程目录中搜索具有以下扩展名的文件：

- `.htm`
- `.html`
- `.markdown` (转换 Markdown 为 HTML)
- `.md` (转换 Markdown 为 HTML)
- `.xhtml`
- `.xml` (作为HTML处理)

JSDoc 还搜索 JSON 文件，这个 JSON 文件包含有关标题，排序，和教程的层次结构等信息，这些将在下面的部分中讨论。

JSDoc 给每个教程分配一个标识符。该标识符是不带扩展名的文件名。例如，`/path/to/tutorials/overview.md` 分配的标识符是 `overview`。

在教程文件中，可以使用 `{@link}` 和 `{@tutorial}` 内联标签来链接到文档的其他部分。JSDoc 将自动处理这些链接。

## 配置标题，顺序和层次结构

默认情况下，JSDoc 使用的文件名作为教程标题，并且所有的教程都在同一层次。您可以使用 JSON 文件为每个教程提供标题并指示文档中的教程应如何排序和分组。

JSON 文件必须使用扩展 `.json`。在 JSON 文件，您可以使用教程标识符为每个教程提供两个属性：

- `title`: 文档中显示的标题。
- `children`: 子教程信息。

在 JSDoc 3.2.0 或更高版本中，你可以使用以下格式的 JSON 文件：

1. 对象树，子教程定义在父级教程的 `children` 属性中。例如，`tutorial1` 有两个子教程 `childA` 和 `childB`，`tutorial2` 和 `tutorial1` 在同一层级上，并且 `tutorial2` 没有子教程：

```
{
  "tutorial1": {
    "title": "Tutorial One",
    "children": {
      "childA": {
        "title": "Child A"
      },
      "childB": {
        "title": "Child B"
      }
    }
  },
  "tutorial2": {
    "title": "Tutorial Two"
  }
}
```

2. 一个顶级对象，其属性都是教程对象，子教程在教程对象的 `children` 属性中列出名称。例如，`tutorial1` 有两个子教程 `childA` 和 `childB`，`tutorial2` 和 `tutorial1` 在同一层级上，并且 `tutorial2` 没有子教程：

```
{
  "tutorial1": {
    "title": "Tutorial One",
    "children": ["childA", "childB"]
  },
  "tutorial2": {
    "title": "Tutorial Two"
  },
  "childA": {
    "title": "Child A"
  },
  "childB": {
    "title": "Child B"
  }
}
```

您也可以为每个教程提供了一个单独的 `.json` 文件，使用教程标识符作为文件名。此方法已过时，不应该被用于新的项目。

## 从API文档链接到教程

有多种方式从 API 文档的链接到教程：

### @tutorial 块标签

如果在 JSDoc 注释中包含一个 [@tutorial](./tags-tutorial.md) 块标签，生成的文件将包含一个链接，链接到您指定的教程。

例如，使用 `@tutorial` 块标签:

```
/**
 * Class representing a socket connection.
 *
 * @class
 * @tutorial socket-tutorial
 */
function Socket() {}
```

### {@tutorial} 内联标签

也可以在另一个标签的文本中使用 [{@tutorial} 内联标签](./tags-inline-tutorial.md)，链接到一个教程。默认情况下，JSDoc 将使用教程标题作为链接文字。

例如，使用 `{@tutorial}` 内联标签:

```
/**
 * Class representing a socket connection. See {@tutorial socket-tutorial}
 * for an overview.
 *
 * @class
 */
function Socket() {}
```


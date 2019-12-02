# JSDoc 入门

## 目录

- [介绍](#介绍)
- [向代码中添加文档注释](#向代码中添加文档注释)
- [生成网站](#生成网站)

## 介绍

JSDoc 3 是一个用于 JavaScript 的API文档生成器，类似于 Javadoc 或 phpDocumentor。可以将文档注释直接添加到源代码中。JSDoc 工具将扫描您的源代码并为您生成一个 HTML 文档网站。

## 向代码中添加文档注释

JSDoc 的目的是记录 JavaScript 应用程序或库的 API。假设您想要记录诸如模块、名称空间、类、方法、方法参数等内容。

JSDoc注释通常应该放在记录代码之前。为了被 JSDoc 解析器识别，每个注释必须以 `/**` 序列开头。以 `/*`、`/***`开头或超过3颗星的注释将被忽略。这个特性用于控制解析注释块的功能。

最简单的文档示例就是描述：

```
/** This is a description of the foo function. */
function foo() {
}
```

添加一个描述很简单--只需在文档注释中键入所需的说明。

可以使用特殊的 `JSDoc标签` 来提供更多信息。例如，如果函数是类的构造函数，则可以通过添加 [@constructor](./tags-constructor.md)标记来表示。

```
/**
 * Represents a book.
 * @constructor
 */
function Book(title, author) {
}
```

使用标签添加更多的信息。

```
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
```

## 生成网站

一旦你的代码是已注释的，你可以是用 JSDoc 3的工具从源文件中生成一个 HTML 网站。

默认情况下，JSDoc 使用内置的“默认”模板将文档转换为 HTML。您可以根据自己的需要编辑此模板，或者创建一个全新的模板（如果您喜欢的话）。

在命令行上运行文档生成器：

```
jsdoc book.js
```

此命令将在当前工作目录中创建名为 `out/` 的目录。在该目录中，您将找到生成的 HTML 页面。
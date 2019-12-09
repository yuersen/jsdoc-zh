<!--
title: 使用配置文件配置 JSDoc
order: 104
author: yuer
-->

# 使用配置文件配置 JSDoc

## 目录

- [配置文件格式](#配置文件格式)
- [默认配置选项](#默认配置选项)
- [配置插件](#配置插件)
- [指定递归深度](#指定递归深度)
- [指定输入文件](#指定输入文件)
- [指定源类型](#指定源类型)
- [将命令行选项合并到配置文件中](#将命令行选项合并到配置文件中)
- [配置标记和标记字典](#配置标记和标记字典)
- [配置模板](#配置模板)
- [相关链接](#相关链接)

## 配置文件格式

要自定义 JSDoc 的行为，可以使用以下格式之一向 JSDoc 提供配置文件：

- 一个JSON文件。在JSDoc 3.3.0及更高版本中，此文件可能包含注释。
- 导出单个配置对象的 CommonJS 模块。JSDoc 3.5.0及更高版本支持这种格式。

要使用配置文件运行 JSDoc，请使用 [`-c` 命令行选项](./about-commandline.md)（例如，`jsdoc -c /path/To/conf.json` 或 `jsdoc -c /path/To/conf.js`）。

下面的例子展示了一个简单的配置文件，它启用了 JSDoc 的 [Markdown 插件](./about-plugins-markdown.md)。JSDoc 的配置选项将在下面的章节中详细说明。

JSON 配置文件：

```
{
  "plugins": ["plugins/markdown"]
}
```

JS 配置文件：

```
'use strict';
module.exports = {
  plugins: ['plugins/markdown']
};
```

更多的信息，请查阅文件 [conf.json.EXAMPLE](https://github.com/jsdoc/jsdoc/blob/master/packages/jsdoc/conf.json.EXAMPLE)。

## 默认配置选项

如果不指定配置文件，JSDoc 将使用默认如下配置：

```
{
  "plugins": [],
  "recurseDepth": 10,
  "source": {
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  },
  "sourceType": "module",
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  },
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
```

这意味着：

- 无插件加载（`plugins`）;
- 如果使用 [-r 命令行](./about-commandline.md)标志启用递归，JSDoc 将搜索 10 层深的文件（`recurseDepth`）；
- 只有以 `.js`、`.jsdoc` 和 `.jsx` 结尾的文件将会被处理（`source.includePattern`）；
- 任何文件以下划线开始或开始下划线的目录都将被忽略（`source.excludePattern`）；
- JSDoc 支持使用 [ES2015 modules](./howto-es2015-modules.md)（`sourceType`）；
- JSDoc 允许您使用无法识别的标签（`tags.allowUnknownTags`）；
- 标准 JSDoc 标签和 [closure 标签](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags)被启用（`tags.dictionaries`）；
- [@link标签](./tags-inline-link.md)呈现在纯文本（`templates.cleverLinks`，`templates.monospaceLinks`）。

这些选项和其他选项将在这个页面中进一步解释。

## 配置插件

要启用插件，将它们的路径（相对于 JSDoc 文件夹）添加到插件数组中。

例如，以下 JSON 配置文件将启用 Markdown 插件（它将 Markdown 格式的文本转换为 HTML）和“summary”插件（它自动为每个 doclet 生成摘要）。

带插件的JSON配置文件：

```
{
  "plugins": [
    "plugins/markdown",
    "plugins/summarize"
  ]
}
```

有关更多信息，请参阅 [plugin 参考](./about-plugins.md)，并在 [JSDoc 的 `plugins` 目录](https://github.com/jsdoc/jsdoc/tree/master/packages/jsdoc/plugins)中查找 JSDoc 内置的插件。

通过向配置文件中添加 `markdown` 对象来配置 `Markdown` 插件。有关详细信息，请参阅[配置 `Markdown` 插件](./plugins-markdown.md)。


## 指定递归深度

`recurseDepth` 配置控制 JSDoc 递归源文件的层级数量。该属性在 JSDoc 3.5.0以及更高版本中使用。并且仅当还指定了 `-r` 命令行标志时才使用此选项，该标志告诉 JSDoc 递归搜索输入文件。

```
{
  "recurseDepth": 10
}
```

## 指定输入文件

`source` 选项组结合给 JSDoc 命令行的路径，确定哪些文件要用 JSDoc 生成文档。

```
{
  "source": {
    "include": [ /* array of paths to files to generate documentation for */ ],
    "exclude": [ /* array of paths to exclude */ ],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  }
}
```

- `source.include`：可选的路径数组，JSDoc应该为它们生成文档。JSDoc 将会结合命令行上的路径和这些文件名，以形成文件组，并且扫描。如果路径是一个目录，可以使用 `-r` 选项来递归。
- `source.exclude`：可选的路径数组，JSDoc 应该忽略的路径。在 JSDoc3.3.0 或更高版本，该数组可包括 `source.include` 路径中的子目录。
- `source.includePattern`：一个可选的字符串，解释为一个正则表达式。如果存在，所有文件必须匹配这个正则表达式，以通过 JSDoc 进行扫描。默认情况下此选项设置为`.+.js(doc)?$`，这意味着只有以 `.js`、`.jsdoc` 和 `.jsx` 结尾的文件将被扫描。
- `source.excludePattern`：一个可选的字符串，解释为一个正则表达式。如果存在的话，任何匹配这个正则表达式的文件将被忽略。默认设置是以下划线开头的文件（或以下划线开头的目录下的所有文件）将被忽略。

这些选项中使用的顺序是：

1. 以命令行上给定的路径开始，并且在 `source.include` 中的所有文件（记得，使用 `-r` 命令行选项将在子目录中搜索）。
2. 对于在步骤1中找到的每个文件，如果正则表达式 `source.includePattern` 存在，该文件必须匹配，否则将被忽略。
3. 对于在步骤2中找到的每个文件，如果正则表达式 `source.excludePattern` 存在，任何匹配这个正则表达式的文件将被忽略。
4. 对于在步骤3中找到的每个文件，如果路径在 `source.exclude` 中，那么它将被忽略。

经过这四个步骤的所有剩余文件由JSDoc进行解析。

举个例子，假设有以下文件结构：

```
myProject/
|- a.js
|- b.js
|- c.js
|- _private
|  |- a.js
|- lib/
   |- a.js
   |- ignore.js
   |- d.txt
```

另外，假设配置文件如下：

```
{
  "source": {
    "include": ["myProject/a.js", "myProject/lib", "myProject/_private"],
    "exclude": ["myProject/lib/ignore.js"],
    "includePattern": ".+\\.js(doc|x)?$",
    "excludePattern": "(^|\\/|\\\\)_"
  }
}
```

在 `myProject` 根文件夹运行 `jsdoc myProject/c.js -c /path/to/my/conf.json -r`，然后 JSDoc 会为这些文件生产文档：

- `myProject/a.js`
- `myProject/c.js`
- `myProject/lib/a.js`

原因如下：

- 根据 `source.include` 和命令行中给定的路径，我们开始扫描文件
  - `myProject/c.js` (来自命令行)
  - `myProject/a.js` (来自source.include)
  - `myProject/lib/a.js`, `myProject/lib/ignore.js`, `myProject/lib/d.txt` (来自source.include 并且使用 `-r` 选项)
  - `myProject/\_private/a.js` (来自source.include)
- 应用 `source.includePattern`，剩下除了 `myProject/lib/d.txt`，因为它没有以 `.js`，`.jsdoc` 或 `.jsx` 结束。
- 应用 `source.excludePattern`，排除了 `myProject/\_private/a.js`。
- 应用 `source.exclude`，排除了 `myProject/lib/ignore.js`。

## 指定源类型

`sourceType` 选项影响 JSDoc 解析 JavaScript 文件的方式。此选项在 JSDoc 3.5.0及更高版本中可用，此选项接受以下值：

- `module`（默认）：对大多数类型的JavaScript文件使用此值。
- `script`：如果 JSDoc 在解析代码时以严格模式记录错误，例如删除不合格标识符，则使用此值。

```
{
  "sourceType": "module"
}
```

## 将命令行选项合并到配置文件中

可以将 JSDoc 的许多[命令行选项](./about-commandline.md)放入配置文件中，而不是在命令行中指定它们。为此，将相关选项的长名称添加到配置文件的 `opts` 部分，并将值设置为该选项的值。

在配置文件中设置的命令行选项:

```
{
  "opts": {
    "template": "templates/default",  // same as -t templates/default
    "encoding": "utf8",               // same as -e utf8
    "destination": "./out/",          // same as -d ./out/
    "recurse": true,                  // same as -r
    "tutorials": "path/to/tutorials", // same as -u path/to/tutorials
  }
}
```

这样可以通过 `source.include` 和 `opts`，把所有的 JSDoc 的参数放在配置文件中，以便命令行简化为：

```
jsdoc -c /path/to/conf.json
```

在命令行中所提供的选项优先级高于在配置文件中提供的选项。

## 配置标记和标记字典

`tags` 选项控制哪些 JSDoc 标签允许被使用和解析。

```
{
  "tags": {
    "allowUnknownTags": true,
    "dictionaries": ["jsdoc", "closure"]
  }
}
```

`tags.allowUnknownTags` 属性影响 JSDoc 如何处理无法识别的标签。如果将此选项设置为 `false`，JSDoc发现它不能识别（例如,`@foo`），JSDoc 将记录一个警告。默认情况下，此选项设置为 `true`。

`tags.dictionaries` 属性控制 JSDoc 识别哪些标签，以及 JSDoc 如何解析它识别标签。在 JSDoc3.3.0 或更高版本中，有两个内置的标签词典：

- `jsdoc`: 核心JSDoc标签
- `closure`: Closure Compiler 标签

默认情况下，两个词典都是启用的。此外，在默认情况下，JSDoc 字典首先被解析;作为一个结果，如果 JSDoc 词典处理一个标签不同于 closure 词典，jsdoc版本的标签优先被采用。

如果您在Closure Compiler 项目中使用JSDoc，并且你想要避免使用 Closure Compiler 无法识别的标签，更改 `tags.dictionaries` 设置为 `["closure"]`。如果你想允许核心 JSDoc 标签, 但又想要确保 Closure Compiler 特定的标记使用 Closure Compiler 对其进行解释，您也可以更改此设置为 `["closure", "jsdoc"]`。

## 配置模板

`templates` 选项会影响外观和生成的文档内容。自定义模板可能不会实现所有的选项。请参阅[配置JSDoc的默认模板](./about-configuring-default-template.md)中默认模板支持的附加选项。

```
{
  "templates": {
    "cleverLinks": false,
    "monospaceLinks": false
  }
}
```

如果 `templates.monospaceLinks` 为 `true`，从 `@link` 标签生成的所有链接文本将会以等宽字体渲染。

如果 `templates.cleverLinks` 为 `true`，如果“asdf”是一个URL，`{@link asdf}` 会以正常字体呈现，否则等宽。例如，`{@link http://github.com}` 将呈现以纯文本，但 `{@link MyNamespace.myFunction}` 将会是等宽。

如果 `templates.cleverLinks` 为 `true`，它是引用,并且 `templates.monospaceLinks` 是被忽略的。

## 相关链接

- [JSDOC 的命令行参数](./about-commandline.md)
- [关于 JSDoc 插件](./about-plugins.md)
- [使用 Markdown 插件](./about-plugins-markdown.md)

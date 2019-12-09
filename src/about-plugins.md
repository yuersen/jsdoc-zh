<!--
title: 关于 JSDoc 插件
order: 107
author: yuer
-->

# 关于 JSDoc 插件

## 目录

- [创建并启用插件](#创建并启用插件)
- [创建SDoc3插件](#创建SDoc3插件)
  - [事件处理程序](#事件处理程序)
  - [标签定义](#标签定义)
  - [节点访问者](#节点访问者)
- [报告错误](#报告错误)


## 创建并启用插件

创建并启用新 JSDoc 插件,需要两个步骤：

- 创建一个包含你的插件代码的 JavaScript 模块.
- 将该模块添加到 [JSDoc 配置文件](./about-configuring-jsdoc.md)的 `plugins` 数组中。你可以指定一个绝对或相对路径。如果使用相对路径，JSDoc 按照相对于配置文件所在的目录，当前的工作目录和 JSDoc 安装目录的顺序搜索插件。
例如，如果你的插件是在当前工作目录下，`plugins/shout.js` 文件中定义的，你应该在 JSDoc 配置文件中的 `plugins` 数组中添加字符串 `plugins/shout`。

例如，在JSDoc配置文件中添加一个插件：

```
{
  "plugins": ["plugins/shout"]
}
```

JSDoc 按配置文件 `plugins` 数组中列出的顺序执行的插件。

## 创建SDoc3插件

JSDoc 3的插件系统广泛的控制着解析过程。一个插件可以通过执行以下任何一项操作，影响解析结果：

- 定义事件处理程序
- 定义标签
- 定义一个抽象语法树节点的访问者

### 事件处理程序

最高级别，一个插件可以注册具体命名事件的处理程序，让JSDoc触发。 JSDoc将一个事件对象传递给处理程序。你的插件模块要导出一个包含处理程序的 handlers 对象，例如：

例如，事件处理程序插件 'newDoclet' 事件：

```
exports.handlers = {
  newDoclet: function(e) {
    // Do something when we see a new doclet
  }
};
```

JSDoc 触发事件的顺序和底层代码是一样。

事件处理程序插件可以通过设置事件对象的 `stopPropagation` 属性(`e.stopPropagation = true`)停止运行后面的插件。一个插件可以通过设置 `preventDefault` 属性（`e.preventDefault = true`）阻止触发事件。

#### Event: parseBegin

JSDoc 开始加载和解析源文件之前，`parseBegin` 事件被触发。你的插件可以通过修改事件的内容，来控制哪些文件将被 JSDoc 解析。

注意：此事件在 JSDoc3.2 及更高版本有效。

该事件对象包含下列属性：

- `sourcefiles`：源文件的路径数组，这些源文件将被解析。

#### Event: fileBegin

当解析器即将解析一个文件 `fileBegin` 事件触发。如果需要，你的插件可以使用此事件触发每个文件的初始化。

该事件对象包含下列属性：

- `filename`：文件的名称。

#### Event: beforeParse

`beforeParse` 事件在解析开始之前被触发。插件可以使用此方法来修改将被解析的源代码。例如，你的插件可以添加一个 JSDoc 注释，也可以删除不是有效 JavaScript 的预处理标记。

该事件对象包含下列属性：

- `filename`：文件的名称。
- `source`：文件的内容。

下面是为一个函数增加了一个虚拟的 doclet 到源文件的例子，这样它会被解析并添加到文档。这样做，文档的方法就可以提供给用户，但在被文档化的源代码中不可能出现，如由外部超类所提供的方法，示例：

```
exports.handlers = {
  beforeParse: function(e) {
    var extraDoc = [
      '/**',
      ' * Function provided by a superclass.',
      ' * @name superFunc',
      ' * @memberof ui.mywidget',
      ' * @function',
      ' */'
    ];
    e.source += extraDoc.join('\n');
  }
};
```

#### Event: jsdocCommentFound

每当 JSDoc 注释被发现,`jsdocCommentFound` 事件就会被触发。注释可以或不与任何代码相关联。您可以在注释被处理之前使用此事件修改注释的内容。

该事件对象包含下列属性：

- `filename`: 该文件的名称；
- `comment`：JSDoc注释的文本；
- `lineno`: 注释被发现的行号；
- `columnno`: 找到注释的列号，JSDoc 3.5.0及更高版本中提供。

#### Event: symbolFound

当解析器在代码中遇到一个可能需要被文档化的标识符时，`symbolFound` 事件就会被触发。例如，解析器会为源文件中每个变量，函数和对象字面量触发一个 `symbolFound` 事件。

该事件对象包含下列属性：

- `filename`: 该文件的名称。
- `comment`: 与标识符相关联的任何注释文本。
- `id`: 标识符的唯一ID。
- `lineno`: 标识符被发现的行号。
- `columnno`: 找到注释的列号，JSDoc 3.5.0及更高版本中提供。
- `range`: 包含标识符相关联的源文件中第一个和最后一个字符的数字索引的一个数组。
- `astnode`: 抽象语法树中标识符的节点。
- `code`: 有关该代码的详细信息的对象。这个对象通常包含 `name`, `type`, 和 `node` 属性。对象也可能具有 `value`, `paramnames`, 或 `funcscope` 属性，这取决于标识符。

#### Event: newDoclet

newDoclet事件是最高级别的事件。新的 doclet 已被创建时，它就会被触发。这意味着一个 JSDoc 注释或标识符已被处理，并且实际传递给模板的 doclet 已被创建。

该事件对象包含下列属性：

- `doclet`: 已被创建的新 doclet 。

所述的 doclet 的属性取决于 doclet 表示的注释或标识符。你可能会看到一些共同的属性包括：

- `comment`: JSDoc 注释文本，或者，如果标识符没被描述，那么该值是一个空字符串。
- `meta`: 对象，描述 doclet 如何关联源文件（例如，在源文件中的位置）。
- `description`： 被记录的标识符的说明。
- `kind`: 被记录的标识符的种类（例如，`class` 或者 `function`）。
- `name`: 标识符的短名称（例如，`myMethod`）。
- `longname`: 全名，其中包含成员信息（例如，`MyClass#myMethod`）。
- `memberof`: 该标识符所读的模块，命名空间或类（例如，`MyClass`），或者，如果该标识符没有父级，那么该值是一个空字符串。
- `scope`: 标识符在其父级内的作用域范围（例如，`global`, `static`, `instance`,或 `inner`）。
- `undocumented`: 如果标识符没有 JSDoc 注释，设置为 `true`。
- `defaultvalue`: 标识符的默认值。
- `type`: 包含关于标识符类型详细信息的对象。
- `params`: 包含参数列表的对象。
- `tags`: 对象，包含 JSDoc 不识别的标记列表。只有当JSDoc的配置文件中 `allowUnknownTags` 设置为 `true` 时可用。

要查看 JSDoc 为代码生成的 doclet，请使用 [-x命令行](./about-commandline.md)选项运行 JSDoc。

下面是一个 `newDoclet` 处理程序的一个例子说明：

```
exports.handlers = {
  newDoclet: function(e) {
    // e.doclet will refer to the newly created doclet
    // you can read and modify properties of that doclet if you wish
    if (typeof e.doclet.description === 'string') {
      e.doclet.description = e.doclet.description.toUpperCase();
    }
  }
};
```

#### Event: fileComplete

当解析器解析完一个文件时，`fileComplete` 事件就会被触发。你的插件可以使用这个事件来触发每个文件的清理。

该事件对象包含下列属性：

- `filename`: 文件名称。
- `source`: 该文件的内容。

#### Event: parseComplete

JSDoc 解析所有指定的源文件之后，`parseComplete` 事件就会被触发。

注意：此事件在 JSDoc3.2 及更高版本会被触发。

该事件对象包含下列属性：

- `sourcefiles`: 被解析的源代码文件的路径数组。
- `doclets`: doclet对象的数组。见 newDoclet 事件，有关每个的 doclet 可以包含属性的详细信息。注意：这个属性在 JSDoc3.2.1 及更高版本中可用。

#### Event: processingComplete

JSDoc 更新反映继承和借来的标识符的解析结果后，`processingComplete` 事件被触发。

注意：此事件在 JSDoc3.2.1 及更高版本中会被触发。

该事件对象包含下列属性：

- `doclets`: doclet 对象的数组。见 newDoclet 事件，有关每个的 doclet 可以包含属性的详细信息。

### 标签定义

添加标签到标签字典是影响文档生成的一个中级方式。在一个 `newDoclet` 事件被触发前，JSDoc 注释块被解析以确定可能存在的说明和任何 JSDoc 标签。当一个标签被发现，如果它已在标签字典被定义，它就会被赋予一个修改 doclet 的机会。

插件可以通过导出一个 `defineTags` 函数来定义标签。该函数将传递一个可用于定义标签的字典，像这样：

```
exports.defineTags = function(dictionary) {
  // define tags here
};
```

#### The Dictionary（字典）

字典提供了以下方法：

- `defineTag(title, opts)`: 用于定义标签。第一个参数是标签的名称（例如，`param` 或 `overview`）。第二个参数是一个包含标签选项的对象。可以包含以下任一选项;每个选项的默认值都是 `false`：
  - `canHaveType (boolean)`: 如果标签文本可以包含一个类型表达式，那么设置为 `true`（如 `@param {string} name - Description` 中的 `{string}`）。
  - `canHaveName (boolean)`: 如果标签文本可以包含一个名称，那么设置为 `true`（如 `@param {string} name - Description` 中的 `name`)。
  - `isNamespace (boolean)`: 如果该标签是应用 doclet 的长名称，作为命名空间，那么设置为 `true`。例如，`@module` 标签应设置该选项设置为 `true`，并在标签上使用 `@module myModuleName` 的结果为长名称 `module:myModuleName`。
  - `mustHaveValue (boolean)`: 如果该标签必须有一个值，那么设置为 `true`（如 `@name TheName` 中的 `TheName`)。
  - `mustNotHaveDescription (boolean)`: 如果该标签可能有一个值，但是不是必须有描述，那么设置为 `true`（如 `@tag {typeExpr} TheDescription` 中的 `TheDescription`)。
  - `mustNotHaveValue (boolean)`: 如果该标签必须没有值，那么设置为 `true`。
  - `onTagged (function)`: 当该标签被发现时，执行的回调函数。该函数传递两个参数：该 doclet 和该标签对象。
- `lookUp(tagName)`: 按名称检索标签对象。返回该标签对象，包括它的选项，如果标签没有定义，那么返回 `false`。
- `isNamespace(tagName)`: 如果该标签是应用 doclet 的长名称，作为命名空间，那么返回 `true`。
- `normalise(tagName)`: 返回标签的规范名称。例如，`@constant` 是 `@const` 标签的同义词;如果你调用 `normalise('const')`，那么返回结果是 `constant` 字符串。
- `normalize(tagName)`: `normalise` 的同义词。在 JSDoc3.3.0 及更高版本中可用。

标签的 `onTagged` 回调可以修改 doclet 或标签的内容。

定义一个 onTagged 回调: 

```
dictionary.defineTag('instance', {
  onTagged: function(doclet, tag) {
    doclet.scope = "instance";
  }
});
```

`defineTag` 方法返回一个 `Tag` 对象，这个对象有一个 `synonym` 方法，这个方法可用于定义该标签的一个同义词。

定义标签同义词: 

```
dictionary.defineTag('exception', { /* options for exception tag */ })
  .synonym('throws');
```

### 节点访问者

在最底层，插件作者可以通过定义一个访问的每个节点的节点访问者来处理在抽象语法树（AST）中的每个节点。通过使用 `node-visitor` 插件，您可以修改注释并触发任意一段代码的解析事件。

插件可以通过导出一个包含 `visitNode` 函数的 `astNodeVisitor` 对象来定义节点访问者，像这样：

```
exports.astNodeVisitor = {
  visitNode: function(node, e, parser, currentSourceName) {
    // do all sorts of crazy things here
  }
};
```

函数在每个节点上调用，具有以下参数：

- `node`: AST的节点。AST节点是 JavaScript 对象,使用由 Mozilla 的解析器 API 定义的格式。您可以使用 Esprima 的解析器演示，查看为您的源代码创建的AST。
- `e`: 事件。如果该节点是一个解析器处理，事件对象将已经被填充，在 `symbolFound` 事件上用相同的东西描述。否则，这将是空对象在其上设置各种属性。
- `parser`: JSDoc 解析器实例。
- `currentSourceName`: 被解析的文件名。

#### 触发事情发生

实现节点访问的首要原因是为了能够记录事情，那些不寻常的记录（创建类像函数调用），或者自动生成文档为未记录的代码。例如，一个插件可能看起来调用到 `_trigger` 方法，因为它知道这意味着一个事件被触发，然后生成文档因为这个事件。

为了使事情发生了，`visitNode` 函数应该修改事件参数的属性。一般来说，目标是构建一个注释，然后得到一个事件触发。在分析器可以让所有的节点的访问都来看看节点之后，它会查看是否该事件对象有一个 `comment` 释属性和 `event` 属性。如果两个都有，在事件属性命名的事件被触发。该事件通常 `symbolFound` or `jsdocCommentFound`，但理论上，一个插件可以定义自己的事件和处理它们。

与事件处理程序的插件，一个节点访问插件可以停止后面的插件，运行通过在事件对象上设置 `stopPropagation` 属性（`e.stopPropagation = true`）。一个插件可以通过设置的 `preventDefault` 属性停止事件触发（`e.preventDefault = true`）。

## 报告错误

如果你的插件需要报告错误，使用在 `jsdoc/util/logger` 模块中的下列方法之一：

- `logger.warn`： 发出警告给用户，可能出现的问题。
- `logger.error`： 报告错误，从该插件可以恢复。
- `logger.fatal`： 报告错误，应引起 JSDoc 停止运行。

使用这些方法创建更好的用户体验,不是简单地抛出一个错误。

**注意**：请不要使用 `jsdoc/util/error` 模块报告错误。该模块使用，将在 JSDoc 的未来版本中删除。

报告一个非致命错误：

```
var logger = require('jsdoc/util/logger');

exports.handlers = {
  newDoclet: function(e) {
    // Your code here.

    if (somethingBadHappened) {
      logger.error('Oh, no, something bad happened!');
    }
  }
};
```
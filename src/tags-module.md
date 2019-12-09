<!--
title: @module
order: 344
author: yuer
-->

# @module

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@module [[{<type>}] <moduleName>]
```

在 JSDoc3.3.0 或更高版本中，`<moduleName>` 可能包括 `module:` 前缀。在以前的版本中，必须忽略此前缀。

注意：如果你提供了一个type，那 必须同时提供模块名称 `<moduleName>`。

## 概述

`@module` 可以将当前文件标注为一个模块，默认情况下文件内的所有标识符都隶属于此模块，除非文档另有说明。

使用 `module:moduleName` 链接到模块（例如，[@link](./tags-link.md) 或 [@see](./tags-see.md) 标记内）。例如，`@module foo/bar` 可以使用 `{@link module:foo/bar}` 链接到。

如果未提供模块名称，则该名称将从模块的路径和文件名派生。例如，假设我有一个文件 `test.js`，位于 `src` 目录中，它包含 `/** @module */`。下面是运行 JSDoc 的一些场景以及 test.js 的结果模块名：

如果没有提供导出模块的名称：

```
# from src/
jsdoc ./test.js   # module name 'test'

# from src's parent directory:
jsdoc src/test.js # module name 'src/test'
jsdoc -r src/     # module name 'test'
```

## 实例

下面的示例演示了在一个模块中用于标识的 `namepaths`。第一个标识符是模块私有的，或“内部”变量 - 它只能在模块内访问。第二个标识符是由模块导出一个静态函数。

使用基础的 `@module`:

```
/** @module myModule */

/** will be module:myModule~foo */
var foo = 1;

/** will be module:myModule.bar */
var bar = function() {};
```

当一个导出的标识符被定义为 `module.exports`，`exports`，或 `this` 中的成员，JSDoc 会推断该标识符是模块的静态成员。

在下面的例子中，`Book` 类被描述为一个静态成员，`module:bookshelf.Book`，带有一个实例成员，`module:bookshelf.Book#title`。

定义导出的标识符为 `this` 的成员：

```
/** @module bookshelf */
/** @class */
this.Book = function (title) {
  /** The title. */
  this.title = title;
};
```

在下面的例子中，两个函数有 `namepaths`（名称路径）`module:color/mixer.blend` 和 `module:color/mixer.darken`。

定义导出的标识符为 `module.exports` 或 `exports` 的成员:

```
/** @module color/mixer */
module.exports = {
  /** Blend two colours together. */
  blend: function (color1, color2) {}
};
/** Darkens a color. */
exports.darken = function (color, shade) {};
```

更多例子查看[描述 JavaScript 模块](./howto-commonjs-modules.md)。

## 相关链接

- [@exports](./tags-exports.md)
- [CommonJS Modules](./howto-commonjs-modules.md)
- [AMD Modules](./howto-amd-modules.md)



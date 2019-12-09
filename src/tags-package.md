<!--
title: @package
order: 348
author: yuer
-->

# @package

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

使用 JSDoc 标记字典（默认情况下启用）:

```
@package
```

使用 [Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 编译器标记字典:

```
@package [{typeExpression}]
```

## 概述

`@package` 标记将符号内容标记为 package private。通常，此标记指示符号仅可用于与此符号的源文件位于同一目录中的代码。JSDoc 3.5.0 及更高版本中提供了此标记。

默认情况下，文档中将显示用 `@package` 标记标记的符号。在 JSDoc 3.3.0 和更高版本中，可以使用 `-a/--access` 命令行选项来更改此行为。

`@package` 标记等同于 `@access package`。

## 实例

在下面的示例中，实例成员 `Thingy#_bar` 显示在生成的文档中，但带有一个注释，指示它是包专用的

使用 `@package` 标记:

```js
/** @constructor */
function Thingy() {
  /** @package */
  this._bar = 1;
}
```

## 相关链接

- [@access](./tags-access.md)
- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@private](./tags-private.md)
- [@protected](./tags-protected.md)
- [@public](./tags-public.md)
- [@static](./tags-static.md)

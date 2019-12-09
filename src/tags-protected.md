<!--
title: @protected
order: 352
author: yuer
-->

# @protected

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

使用 JSDoc 标记字典（默认情况下启用）:

```
@protected
```

使用 [Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 编译器标记字典:

```
@protected [{typeExpression}]
```

## 概述

`@protected` 标记将符号标记为受保护。通常，此标记表示符号仅在当前模块中可用或应仅使用。

默认情况下，文档中将显示用 `@protected` 标记标记的符号。在 JSDoc 3.3.0 和更高版本中，可以使用 `-a/--access` 命令行选项来更改此行为。

`@protected` 标记等同于 `@access protected`。

## 实例

在下面的例子中，该实例成员 `Thingy#_bar` 会被导出到生成的文档中，但使用注释说明它是被保护的。

使用 `@protected` 标签：

```js
/** @constructor */
function Thingy() {
  /** @protected */
  this._bar = 1;
}
```

## 相关链接

- [@access](./tags-access.md)
- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@package](./tags-package.md)
- [@private](./tags-private.md)
- [@public](./tags-public.md)
- [@static](./tags-static.md)

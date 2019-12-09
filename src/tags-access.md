<!--
title: @access
order: 302
author: yuer
-->

# @access

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@access <package|private|protected|public>
```

## 概述

`@access` 指定该成员的访问级别（包 `package`，私有 `private`，公共 `public`，或保护 `protected`）。你可以使用与 `@access` 标签同义的其他标签：

- `@access package` 等价于 `@package`，属性在 JSDoc 3.5.0 以上版本可用;
- `@access private` 等价于 `@private`;
- `@access protected` 等价于 `@protected`;
- `@access public` 等价于 `@public`;

私有成员不会显示在生成的输出文档中，除非通过 `-p/--private` 命令行选项运行 JSDoc。在 JSDoc3.3.0 或更高版本，您还可以使用 `-a/--access` 命令行选项来改变这种行为。

请注意，doclet 的访问级别不用于他们的 scope (作用域)。例如，如果 Parent 有一个名为 child 的内部变量，那么这个内部变量将被记录为 `@public`, child 变量仍然是被视为一个内部变量，其 namepath 为 `Parent~child`。 换一种说法，child 变量将有一个内部作用域，即使这个变量是公开的。 要更改 doclet 的作用域，请使用 [`@instance`](./tags-instance.md), [`@static`](./tags-static.md), 和 [`@global`](./tags-global.md) 标签。

## 实例 

可以使用与 `@access` 标签同义的其他标签：

```javascript
/** @constructor */
function Thingy() {

  /** @access private */
  var foo = 0;

  /** @access protected */
  this._bar = 1;

  /** @access package */
  this.baz = 2;

  /** @access public */
  this.pez = 3;

}

// same as...

/** @constructor */
function OtherThingy() {

  /** @private */
  var foo = 0;

  /** @protected */
  this._bar = 1;

  /** @package */
  this.baz = 2;

  /** @public */
  this.pez = 3;

}
```

## 相关链接

- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@package](./tags-package.md)
- [@private](./tags-private.md)
- [@protected](./tags-protected.md)
- [@public](./tags-public.md)
- [@static](./tags-static.md)


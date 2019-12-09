<!--
title: @public
order: 353
author: yuer
-->

# @public

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@public
```

## 概述

`@public` 标签标记标识符为公开的。

默认情况下，JSDoc 把所有标识符当做公开的，因此使用这个标记一般不会影响生成的文档。 然而，你可能更愿意明确地使用 `@public` 标签，这样可以更加清晰的标明你要公开的标识符。

在 JSDoc3 中，`@public` 标签不影响标识符的作用域。使用 [@instance](./tags-instance.md), [@static](./tags-static.md), 和 [@global](./tags-global.md) 标签会改变标识符的作用域。

## 实例

使用 `@public` 标签：

```js
/**
 * The Thingy class is available to all.
 * @public
 * @class
 */
function Thingy() {
  /**
   * The Thingy~foo member. Note that 'foo' is still an inner member
   * of 'Thingy', in spite of the @public tag.
   * @public
   */
  var foo = 0;
}
```

## 相关链接

- [@access](./tags-access.md)
- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@package](./tags-package.md)
- [@private](./tags-private.md)
- [@protected](./tags-protected.md)
- [@static](./tags-static.md)
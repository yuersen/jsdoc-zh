<!--
title: @instance
order: 334
author: yuer
-->

# @instance

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@instance
```

## 概述

使用 `@instance` 标记会将符号标记为其父符号的实例成员。这意味着它可以被称为 `Parent#Child`。

使用 `@instance` 将覆盖 doclet 的默认作用域（除非它在全局作用域中，在这种情况下，它将保持全局作用域）。

## 实例

下面的例子是 `@function MyNamespace#myFunction` 的一个普通写法。

使用 `@instance` 使一个虚拟的 doclet 作为实例成员:

```
/** @namespace MyNamespace */
/**
 * myFunction is now MyNamespace#myFunction.
 * @function myFunction
 * @memberof MyNamespace
 * @instance
 */
```

更有用的是，可以使用 `@instance` 标记覆盖 JSDoc 推断的范围。例如，可以指示静态成员用作实例成员。

使用 `@instance` 标识实例成员:

```
/** @namespace */
var BaseObject = {
  /**
   * foo is now BaseObject#foo rather than BaseObject.foo.
   * @instance
   */
  foo: null
};

/** Generates BaseObject instances. */
function fooFactory(fooValue) {
  var props = { foo: fooValue };
  return Object.create(BaseObject, props);
}
```

## 相关链接

- [@global](./tags-global.md)
- [@inner](./tags-inner.md)
- [@static](./tags-static.md)
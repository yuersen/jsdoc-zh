# @inner

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@inner
```

## 概述

使用 `@inner` 标记会将符号标记为其父符号的内部成员。这意味着它可以被 `“Parent~Child”` 引用。

使用 `@inner` 将覆盖 doclet 的默认作用域（除非它在全局作用域中，在这种情况下它将保持全局作用域）。

## 实例

使用 `@inner` 使一个虚拟的 doclet 作为内部成员：

```
/** @namespace MyNamespace */
/**
 * myFunction is now MyNamespace~myFunction.
 * @function myFunction
 * @memberof MyNamespace
 * @inner
 */
```

注意，在上面的代码我们也可以使用 `"@function MyNamespace~myFunction"`，代替 [@memberof](./tags-memberof.md)和 `@inner` 标签。

使用 `@inner`:

```
/** @namespace */
var MyNamespace = {
  /**
   * foo is now MyNamespace~foo rather than MyNamespace.foo.
   * @inner
   */
  foo: 1
};
```

在上面的例子中，我们使用 `@inner` 迫使一个命名空间的成员被描述作为内部成员（默认情况下，这是一个静态成员）。这意味着，`foo` 现在有了 `MyNamespace~foo` 新名字，而不是 `MyNamespace.foo`。

## 相关链接

- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@static](./tags-static.md)
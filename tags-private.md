# @private

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

使用 JSDoc 标记字典（默认情况下启用）:

```
@private
```

使用 [Closure Compiler](https://github.com/google/closure-compiler/wiki/Annotating-JavaScript-for-the-Closure-Compiler#jsdoc-tags) 编译器标记字典:

```
@private [{typeExpression}]
```

## 概述

`@private` 标记将符号标记为 `private`，或不用于一般用途。除非使用 `-p/--private` 命令行选项运行 JSDoc，否则生成的输出中不会显示私有成员。在 JSDoc 3.3.0 和更高版本中，还可以使用 `-a/--access` 命令行选项来更改此行为。

`@private` 标记不被子成员继承。例如，如果 `@private` 标记添加到命名空间，命名空间的成员仍然会输出到生成的文档中;因为命名空间是私有的，成员的 `namepath` 不包含在命名空间中。

`@private` 标记等同于 `@access private`。

## 实例

在下面的例子中，`Documents` 和 `Documents.Newspaper` 会被输出到生成的文档中，但是 `Documents.Diary` 不会。

```js
/** @namespace */
var Documents = {
  /**
   * An ordinary newspaper.
   */
  Newspaper: 1,
  /**
   * My diary.
   * @private
   */
  Diary: 2
};
```

## 相关链接

- [@access](./tags-access.md)
- [@global](./tags-global.md)
- [@instance](./tags-instance.md)
- [@package](./tags-package.md)
- [@protected](./tags-protected.md)
- [@public](./tags-public.md)
- [@static](./tags-static.md)
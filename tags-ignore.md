# @ignore

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@ignore
```

## 概述

`@ignore` 标签表示在代码中的注释不应该出现在文档中，注释会被直接忽略。这个标签优先于所有其他标签。

对于大多数 JSDoc 模板来说，包括默认模板，`@ignore` 标签具有以下效果：

- 如果您和 [@class](./tags-class.md) 或 [@module](./tags-module.md) 标签结合使用 `@ignore` 标签，整个类或模块的 JSDoc 注释文档会被省略。
- 如果您和 [@namespace](./tags-namespace.md) 标签结合使用 `@ignore` 标签，必须将 `@ignore` 标签添加到任意子类和命名空间中。否则，会显示子类和命名空间的文档，但不完整。

## 实例

在下面的例子中，`Jacket` 和 `Jacket#color` 将不会出现在文档中。

在 Class 中使用 `@ignore` 标签：

```
/**
 * @class
 * @ignore
 */
function Jacket() {
  /** The jacket's color. */
  this.color = null;
}
```

在下面的例子中， `Clothes` 命名空间包含一个 `Jacket` 类。`@ignore` 标签必须添加到 `Clothes` 和 `Clothes.Jacket` 中。`Clothes`, `Clothes.Jacket` 和 `Clothes.Jacket#color` 将不会出现在文档。

带子类的命名空间：

```javascript
/**
 * @namespace
 * @ignore
 */
var Clothes = {
  /**
   * @class
   * @ignore
   */
  Jacket: function() {
    /** The jacket's color. */
    this.color = null;
  }
};
```

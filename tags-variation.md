# @variation

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@variation <variationNumber>
```

## 概述

有时代码可能包含多个具有相同长名称的符号。例如，您可能同时拥有一个全局类和一个名为 `Widget` 的顶级命名空间。在这种情况下，`{@link Widget}` 或 `@memberof Widget` 是什么意思？全局命名空间，还是全局类？

变体有助于 JSDoc 区分具有相同长名称的不同符号。例如，如果将 `“@variation 2”` 添加到小部件类的JSDoc注释中，`“{@link Widget(2)}”` 将引用该类，`“{@link Widget}”` 将引用命名空间。或者，当您使用诸如 `@alias` 或 `@name` 之类的标记（例如，`“@alias Widget(2)”`）指定符号时，也可以包含变体。

您可以使用 `@variation` 标记提供任何值，只要该值和 longname 的组合产生了 longname 的全局唯一版本。作为最佳实践，使用可预测的模式来选择值，这将使您更容易编写代码文档。

## 实例

下面的示例使用 `@variation` 标签来区分 `Widget` 类和 `Widget` 命名空间。

```js
/**
 * The Widget namespace.
 * @namespace Widget
 */

// you can also use '@class Widget(2)' and omit the @variation tag
/**
 * The Widget class. Defaults to the properties in {@link Widget.properties}.
 * @class
 * @variation 2
 * @param {Object} props - Name-value pairs to add to the widget.
 */
function Widget(props) {}

/**
 * Properties added by default to a new {@link Widget(2)} instance.
 */
Widget.properties = {
  /**
   * Indicates whether the widget is shiny.
   */
  shiny: true,
  /**
   * Indicates whether the widget is metallic.
   */
  metallic: true
};
```

## 相关链接

- [@alias](./tags-alias.md)
- [@name](./tags-name.md)

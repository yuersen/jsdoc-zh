# 块标签和内联标签

## 目录

- [概述](#概述)
- [示例](#示例)

## 概述

JSDoc支持两种不同类型的标签：

- 块标签(Block), 这是在一个JSDoc注释的最高级别。
- 内联标签(inline), 块标签文本中的标签或说明。

块标签通常会提供有关您的代码的详细信息，如一个函数接受的参数。内联标签通常链接到文件的其他部分，类似于HTML中的锚标记（`<a>`）。

块标签总是以 at 符号（`@`）开头。除了 JSDoc 注释中最后一个块标记，每个块标签后面必须跟一个换行符。

内联标签也以 at 符号（`@`）开。然而，内联标签及其文本必须用花括号（`{ and }`）括起来。 `{` 表示行内联标签的开始，而 `}` 表示内联标签的结束。如果你的标签文本中包含右花括号（`}`），则必须用反斜线（ `\` ）进行转义。在内联标签后,你并不需要使用一个换行符。

大多数JSDoc标签是块标签。一般来说，当这个网站上说"JSDoc 标签",我们真正的意思是"块标签"。

## 示例

在下面的例子中， `@param` 是一个块标签，而 `{@link}` 是一个内联标签。

例如，JSDoc 注释中的块标签和内联标签：

```
/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the shoe size.
 *
 * @param {string} color - The shoe's color.
 */
Shoe.prototype.setColor = function(color) {
  // ...
};
```

您可以在描述中使用内联标签，如上图所示，或在块标记中使用内联标签，如下图所示。

例如，块标签内使用内嵌标签：

```
/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
Shoe.prototype.setColor = function(color) {
  // ...
};
```

当您在 JSDoc 注释中使用多个块标记，它们必须使用换行符将他们分开。

例如，用换行符分隔的多个块标签：

```
/**
 * Set the color and type of the shoelaces.
 *
 * @param {LACE_COLORS} color - The shoelace color.
 * @param {LACE_TYPES} type - The type of shoelace.
 */
Shoe.prototype.setLaceType = function(color, type) {
  // ...
};
```
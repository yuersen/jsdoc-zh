# @implements

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@implements {typeExpression}
```

## 概述

`@implements` 标签表示一个标识实现一个接口。

添加 `@implements` 标签到实现接口（例如，一个构造函数）的顶层标识。不需要将 `@implements` 标签添加到实现接口（例如，实现的实例方法）的每个成员上。

如果没有在实现的接口中描述这个标识，JSDoc 会自动使用该接口文档的标识。

## 实例

在下面的例子中，`TransparentColor` 类实现 `Color` 接口，并添加了 `TransparentColor#rgba` 方法。

使用 `@implements` 标签：

```javascript
/**
 * Interface for classes that represent a color.
 *
 * @interface
 */
function Color() {}

/**
 * Get the color as an array of red, green, and blue values, represented as
 * decimal numbers between 0 and 1.
 *
 * @returns {Array<number>} An array containing the red, green, and blue values,
 * in that order.
 */
Color.prototype.rgb = function() {
  throw new Error("not implemented");
};

/**
 * Class representing a color with transparency information.
 *
 * @class
 * @implements {Color}
 */
function TransparentColor() {}

// inherits the documentation from `Color#rgb`
TransparentColor.prototype.rgb = function() {
  // ...
};

/**
 * Get the color as an array of red, green, blue, and alpha values, represented
 * as decimal numbers between 0 and 1.
 *
 * @returns {Array<number>} An array containing the red, green, blue, and alpha
 * values, in that order.
 */
TransparentColor.prototype.rgba = function() {
  // ...
};
```

## 相关链接

- [@interface](./tags-interface.md)

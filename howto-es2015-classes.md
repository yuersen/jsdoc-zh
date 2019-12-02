# ES 2015 Classes

## 目录

- [文档化一个简单的类](#文档化一个简单的类)
- [扩展类](#扩展类)
- [相关链接](#相关链接)

JSDoc3 描述一个遵循 [ECMAScript 2015 规范](http://www.ecma-international.org/ecma-262/6.0/#sec-class-definitions)的类是很简单的。你并不需要使用诸如如 `@class` 和 `@constructor` 的标签来描述 ES2015 classes，JSDoc 通过分析你的代码会自动识别类和它们的构造函数。ES2015 classes 在 JSDoc3.4.0 及更高版本支持。

## 文档化一个简单的类

下面的例子演示了如何通过一个构造函数，两个实例方法和一个静态方法文档化一个简单的类：

```
/** Class representing a point. */
class Point {
  /**
    * Create a point.
    * @param {number} x - The x value.
    * @param {number} y - The y value.
    */
  constructor(x, y) {
    // ...
  }

  /**
    * Get the x value.
    * @return {number} The x value.
    */
  getX() {
    // ...
  }

  /**
    * Get the y value.
    * @return {number} The y value.
    */
  getY() {
    // ...
  }

  /**
    * Convert a string containing two comma-separated numbers into a point.
    * @param {string} str - The string containing two comma-separated numbers.
    * @return {Point} A Point object.
    */
  static fromString(str) {
    // ...
  }
}
```

还可以记录类表达式中定义的类，将其分配给一个变量或常量：

```
/** Class representing a point. */
const Point = class {
  // and so on
}
```

## 扩展类

当您使用 `extends` 关键字来扩展一个现有的类的时候，你还需要告诉 JSDoc 哪个类是你要扩展的。 为此，您可以使用 [@augments](./tags-augments.md) (或 [@extends](./tags-augments.md)) 标签。

例如，扩展如上所示 `Point` 类，扩展一个 ES2015 类：

```
/**
 * Class representing a dot.
 * @extends Point
 */
class Dot extends Point {
  /**
   * Create a dot.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @param {number} width - The width of the dot, in pixels.
   */
  constructor(x, y, width) {
    // ...
  }

  /**
   * Get the dot's width.
   * @return {number} The dot's width, in pixels.
   */
  getWidth() {
    // ...
  }
}
```

## 相关链接

- [@augments](./tag-augments.md)


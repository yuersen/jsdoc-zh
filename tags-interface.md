# @interface

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

用作 JSDoc 标签字典 (默认开启):

```
@interface [<name>]
```

用作 Closure Compiler 标签字典:

```
@interface
```

## 概述

`@interface` 标签使一个标识符作为其他标识符的一个实现接口。 例如，你的代码可能定义一个父类，它的方法和属性被去掉。您可以将 `@interface` 标签添加到父类，以指明子类必须实现父类的方法和属性。

作为接口，`@interface` 标记应该添加到顶层标识符（例如，一个构造函数）。你并不需要将 `@interface` 标签添加加到实现接口（例如，实现的实例方法）的每个成员上。

如果您使用的是 JSDoc 标记字典（默认启用），你还可以定义一个接口的虚拟注释，而不是为接口编写代码。见一个例子“定义一个接口的虚拟注释”。

## 实例

在下面的例子中，`Color` 函数表示其它类可以实现的接口。

使用 `@interface` 标签：

```
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
  throw new Error('not implemented');
};
```

下面的例子使用虚拟注释，而不是代码，来定义 `Color` 接口。

虚拟注释来定义一个接口：

```
/**
 * Interface for classes that represent a color.
 *
 * @interface Color
 */

/**
 * Get the color as an array of red, green, and blue values, represented as
 * decimal numbers between 0 and 1.
 *
 * @function
 * @name Color#rgb
 * @returns {Array<number>} An array containing the red, green, and blue values,
 * in that order.
 */
```

## 相关链接

- [@implements](./tags-implements.md)

<!--
title: CommonJS Modules
order: 203
author: yuer
-->

# CommonJS Modules

## 目录

- [概述](#概述)
- [模块标识](#模块标识)
- [exports对象的属性](#exports对象的属性)
- [值分配给局部变量](#值分配给局部变量)
- [值分配给module.exports](#值分配给module.exports)
  - [对象字面量分配给module.exports](#对象字面量分配给module.exports)
  - [函数分配给module.exports](#函数分配给module.exports)
  - [字符串，数字，或布尔值分配给module.exports](#字符串，数字，或布尔值分配给module.exports)
- [值分配给module.exports和局部变量](#值分配给module.exports和局部变量)
- [属性添加到this](#属性添加到this)
- [相关链接](#相关链接)

## 概述

为了帮助记录 [CommonJS modules](http://wiki.commonjs.org/wiki/Modules/1.1)（模块），JSDoc 能理解很多在 CommonJS 的规范中使用的约定（例如，添加属性到 `exports` 对象）。此外，JSDoc 接受 [Node.js modules](https://nodejs.org/api/modules.html)（模块）的约定，它扩展了 CommonJS 的标准（例如，将值分配给 `module.exports`）。根据所遵循编码约定，可能需要提供一些额外的标签，以帮助 JSDoc 理解你的代码。

本页面说明如何记录使用几种不同编码约定的 CommonJS 和 Node.js 的模块。如果你要记录异步模块定义（AMD）模块（比如大家熟知的"RequireJS模块"），请查看 [AMD Modules(模块)](./howto-amd-modules.md)。

## 模块标识

在大多数情况下，CommonJS 或 Node.js 的模块应该包含一个独立的 JSDoc 注释,这个 JSDoc 注释应该包含 [@module](./tag-moudle.md) 标签。`@module` 标签的值应该是传递给 `require()` 函数的模块标识符。例如，如果用户通过调用 `require('my/shirt')` 来加载模块，你的 JSDoc 注释将包含 `@module my/shirt` 标签。

如果你使用不带值的 `@module` 标签，JSDoc 会基于文件路径尝试猜测正确的模块标识符。

当您使用 [JSDoc namepath](./about-namepaths.md) 从另一个 JSDoc 注释中引用一个模块，您必须添加前缀 `module:`。例如，如果你想模块 `my/pants` 的文档连接到模块 `my/shirt`，您可以使用 [@see](./tag-see.md) 标签来描述 `my/pants`，如下：

```
/**
  * Pants module.
  * @module my/pants
  * @see module:my/shirt
  */
```

同样，模块中每个成员的 `namepath` （名称路径）将以 `module:` 开始，后面跟模块名字。例如，如果你的 `my/pants` 模块输出一个 `Jeans` 类，并且 `Jeans` 有一个名为 `hem` 的实例方法，那么这个实例方法 `longname`（长名称）是 `module:my/pants.Jeans#hem`。

## exports对象的属性

最容易记录直接指定给 `exports` 对象的属性的符号。JSDoc 将自动识别模块导出这些符号。

在下面的例子中，`my/shirt` 模块导出 `button` 和 `unbutton` 方法。JSDoc 会自动检测模块导出的这些方法。

例如，方法添加到导出对象：

```
/**
  * Shirt module.
  * @module my/shirt
  */

/** Button the shirt. */
exports.button = function() {
  // ...
};

/** Unbutton the shirt. */
exports.unbutton = function() {
  // ...
};
```

## 值分配给局部变量

在一些情况下，导出的标识符在它被加入到 `exports` 对象之前，可以被分配给一个局部变量。例如，如果你的模块导出一个 `wash` 方法，而模块本身往往就叫做 `wash` 方法，您可以编写模块。

例如，方法分配给局部变量并添加到导出对象:

```
/**
  * Shirt module.
  * @module my/shirt
  */

/** Wash the shirt. */
var wash = exports.wash = function() {
  // ...
};
```

在这种情况下，JSDoc 不会自动记录 `wash` 作为导出的方法，因为 JSDoc 注释呈现在局部变量 `wash` 之前，而不是呈现在 `exports.wash` 之前。一个解决办法是增加一个 [@alias](./tags-alias.md) 标签，用来正确定义方法的长名称。在这种情况下，该方法是模块 `my/shirt` 的静态成员，所以正确的长名字是 `module:my/shirt.wash`：

例如，长名称定义在 `@alias` 标签中：

```
/**
  * Shirt module.
  * @module my/shirt
  */

/**
  * Wash the shirt.
  * @alias module:my/shirt.wash
  */
var wash = exports.wash = function() {
  // ...
};
```

另一种解决方案是将方法的 JSDoc 注释移动到 `exports.wash` 的上面。这种变化使得 JSDoc 检测到 `wash` 是由模块 `my/shirt` 导出的。

例如，JSDoc 注释放在 `exports.wash` 之前：

```
/**
  * Shirt module.
  * @module my/shirt
  */

var wash =
/** Wash the shirt. */
exports.wash = function() {
  // ...
};
```

## 值分配给module.exports

在 Node.js 的模块中，您可以直接给 `module.exports` 赋值。本节介绍如何记录分配给 `module.exports` 的不同类型的值。

### 对象字面量分配给module.exports

如果一个模块将一个对象字面量分配给 `module.exports`。JSDoc 自动识别这个模块的 `exports` 只有这个值。此外，JSDoc 自动为每个属性设置正确的长名称。

例如：对象字面量分配给'module.exports'：

```
/**
 * Color mixer.
 * @module color/mixer
 */

module.exports = {
  /**
    * Blend two colors together.
    * @param {string} color1 - The first color, in hexadecimal format.
    * @param {string} color2 - The second color, in hexadecimal format.
    * @return {string} The blended color.
    */
  blend: function(color1, color2) {
    // ...
  },

  /**
    * Darken a color by the given percentage.
    * @param {string} color - The color, in hexadecimal format.
    * @param {number} percent - The percentage, ranging from 0 to 100.
    * @return {string} The darkened color.
    */
  darken: function(color, percent) {
    // ..
  }
};
```

您也可以使用另一种模式，在 `module.exports` 对象字面量以外添加属性。

例如，通过属性定义，分配给 `module.exports`：

```
/**
 * Color mixer.
 * @module color/mixer
 */

module.exports = {
  /**
    * Blend two colors together.
    * @param {string} color1 - The first color, in hexadecimal format.
    * @param {string} color2 - The second color, in hexadecimal format.
    * @return {string} The blended color.
    */
  blend: function(color1, color2) {
    // ...
  }
};

/**
  * Darken a color by the given percentage.
  * @param {string} color - The color, in hexadecimal format.
  * @param {number} percent - The percentage, ranging from 0 to 100.
  * @return {string} The darkened color.
  */
module.exports.darken = function(color, percent) {
// ..
};
```

### 函数分配给module.exports

如果你分配一个函数给 `module.exports`，JSDoc 将自动这个函数设置正确的长名称。

例如，函数分配给'module.exports'：

```
/**
  * Color mixer.
  * @module color/mixer
  */

/**
  * Blend two colors together.
  * @param {string} color1 - The first color, in hexadecimal format.
  * @param {string} color2 - The second color, in hexadecimal format.
  * @return {string} The blended color.
  */
module.exports = function(color1, color2) {
  // ...
};
```

同样的模式适用于构造函数。

例如，构造函数分配给 'module.exports'：

```
/**
  * Color mixer.
  * @module color/mixer
  */

/** Create a color mixer. */
module.exports = function ColorMixer() {
  // ...
};
```

### 字符串，数字，或布尔值分配给module.exports

对于分配给 `module.exports` 值类型（字符串，数字和布尔值），必须在和 `@module` 标签同一 JSDoc注 释块中通过使用 [@type](./tag-type.md) 标签记录导出的值类型。

例如，字符串分配给 'module.exports':

```
/**
  * Module representing the word of the day.
  * @module wotd
  * @type {string}
  */

module.exports = 'perniciousness';
```

## 值分配给module.exports和局部变量

如果模块导出标识符不直接分配给 `module.exports`，可以使用 [@exports](./tag-exports.md) 标签代替 `@module` 标签。`@exports` 标签告诉 JSDoc，这个标识符表示是模块导出的值。

例如，对象字面量分配给一个局部变量和 `module.exports`：

```
/**
  * Color mixer.
  * @exports color/mixer
  */
var mixer = module.exports = {
  /**
    * Blend two colors together.
    * @param {string} color1 - The first color, in hexadecimal format.
    * @param {string} color2 - The second color, in hexadecimal format.
    * @return {string} The blended color.
    */
  blend: function(color1, color2) {
    // ...
  }
};
```

## 属性添加到this

当一个模块添加属性到它的 `this` 对象，JSDoc 自动识别新的属性会被该模块导出。

例如，属性添加到一个模块的'this'对象：

```
/**
  * Module for bookshelf-related utilities.
  * @module bookshelf
  */

/**
  * Create a new Book.
  * @class
  * @param {string} title - The title of the book.
  */
this.Book = function(title) {
  /** The title of the book. */
  this.title = title;
}
```

## 相关链接

- [在 JSDoc 3中使用名称路径](./about-namepaths.md)
- [@exports](./tags-exports.md)
- [@module](./tags-module.md)

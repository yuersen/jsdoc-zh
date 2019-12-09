<!--
title: AMD Modules
order: 204
author: yuer
-->

# AMD Modules

## 目录

- [概述](#概述)
- [模块标识符](#模块标识符)
- [函数返回一个对象字面量](#函数返回一个对象字面量)
- [函数返回另一个函数](#函数返回另一个函数)
- [模块声明在return语句中](#模块声明在return语句中)
- [模块对象传递给一个函数](#模块对象传递给一个函数)
- [多模块定义在一个文件中](#多模块定义在一个文件中)
- [相关链接](#相关链接)

## 概述

JSDoc3 可以使用[异步模块定义AMD API](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)记录模块，这是由库实现的，如 [RequireJS](https://requirejs.org/)。本页面说明根据您的模块使用的编码约定，如何使用 JSDoc 记录 AMD 模块。

如果你记录 CommonJS 或 Node.js 的模块，见 [CommonJS 模块](./howto-commonjs-modules.md)的说明。

## 模块标识符

当您记录一个 AMD 模块时，你要使用 `@exports` 标签或 `@module` 标签 来记录真实传递给 `require()` 函数的标识符。例如，如果用户通过调用 `require('my/shirt', /* callback */)` 来加载该模块，你会写一个包含 `@exports my/shirt` 或 `@module my/shirt` 标签的 JSDoc 注释。下面的例子可以帮助你决定使用哪些标签。

如果你使用不带值的 `@exports` 或 `@module` 标签，JSDoc 会基于文件路径尝试猜测正确的模块标识符。

当您使用 [JSDoc namepath](./about-namepaths.md) 从另一个JSDoc注释中引用一个模块，您必须添加前缀 `module:`。例如，如果你想模块 `my/pants` 的文档连接到模块 `my/shirt`，您可以使用 [@see](./tag-see.md) 标签来描述 `my/pants`，如下：

```
/**
  * Pants module.
  * @module my/pants
  * @see module:my/shirt
  */
```

同样，模块中每个成员的 `namepath` （名称路径）将以 `module:` 开始，后面跟模块名字。例如，如果你的 `my/pants` 模块输出一个 `Jeans` 类，并且 `Jeans` 有一个名为 `hem` 的实例方法，那么这个实例方法 `longname`（长名称）是 `module:my/pants.Jeans#hem`。

## 函数返回一个对象字面量

如果你定义 AMD 模块作为一个函数，该函数返回一个对象字面量， 使用 [@exports](./tags-exports.md) 标签来记录模块的名称。JSDoc 会自动检测该对象的属性是模块的成员。

例如，函数返回一个对象字面量：

```
define('my/shirt', function() {
 /**
  * A module representing a shirt.
  * @exports my/shirt
  */
  var shirt = {
    /** The module's `color` property. */
    color: 'black',

    /**
      * Create a new Turtleneck.
      * @class
      * @param {string} size - The size (`XS`, `S`, `M`, `L`, `XL`, or `XXL`).
      */
    Turtleneck: function(size) {
      /** The class's `size` property. */
      this.size = size;
    }
  };

  return shirt;
});
```

## 函数返回另一个函数

如果你定义模块作为一个函数，导出的另一个函数，比如构造函数，你可以使用一个独立的带有 [@module](./tag-module.md) 标签的注释来记录模块。然后，您可以使用一个 [@alias](./tag-alias.md) 标签告诉 JSDoc 该函数使用相同的长名称作为模块。

例如，函数返回另一个函数：

```
/**
  * A module representing a jacket.
  * @module my/jacket
  */
define('my/jacket', function() {
  /**
    * Create a new jacket.
    * @class
    * @alias module:my/jacket
    */
  var Jacket = function() {
    // ...
  };

  /** Zip up the jacket. */
  Jacket.prototype.zip = function() {
    // ...
  };

  return Jacket;
});
```

## 模块声明在return语句中

如果你在一个函数的 `return` 语句中声明你的模块对象，你可以使用一个独立的带有 [@module](./tag-module.md) 标签的注释来记录模块。然后，您可以使用一个 [@alias](./tag-alias.md) 标签告诉 JSDoc 该函数使用相同的长名称作为模块。

例如，模块声明在 `return` 语句中：

```js
/**
  * Module representing a shirt.
  * @module my/shirt
  */

define('my/shirt', function() {
  // Do setup work here.

  return /** @alias module:my/shirt */ {
    /** Color. */
    color: 'black',
    /** Size. */
    size: 'unisize'
  };
});
```

## 模块对象传递给一个函数

如果模块对象传递到定义你的模块的函数，你可以通过给函数参数添加 [@exports](./tag-exports.md) 标签来记录模块。这种模式在 JSDoc3.3.0 及更高版本中支持。

例如，模块对象传递给一个函数：

```
define('my/jacket', function(
  /**
    * Utility functions for jackets.
    * @exports my/jacket
    */
  module) {

  /**
    * Zip up a jacket.
    * @param {Jacket} jacket - The jacket to zip up.
    */
  module.zip = function(jacket) {
    // ...
  };
});
```

## 多模块定义在一个文件中

如果在一个单一的 JavaScript 文件中定义多个 AMD 模块，你应该使用 [@exports](./tag-exports.md) 标签来记录每个模块对象。

例如，多模块定义在一个文件中：

```js
// one module
define('html/utils', function() {
  /**
    * Utility functions to ease working with DOM elements.
    * @exports html/utils
    */
  var utils = {
    /**
      * Get the value of a property on an element.
      * @param {HTMLElement} element      - The element.
      * @param {string}      propertyName - The name of the property.
      * @return {*}           The value of the property.
      */
    getStyleProperty: function(element, propertyName) { }
  };

  /**
    * Determine if an element is in the document head.
    * @param {HTMLElement} element - The element.
    * @return {boolean}     Set to `true` if the element is in the document head,
    *                               `false` otherwise.
    */
  utils.isInHead = function(element) { }

    return utils;
  }
);

// another module
define('tag', function() {
    /** @exports tag */
    var tag = {
    /**
      * Create a new Tag.
      * @class
      * @param {string} tagName - The name of the tag.
      */
    Tag: function(tagName) {
      // ...
    }
  };

  return tag;
});
```

## 相关链接

- [在 JSDoc 3中使用名称路径](./about-namepaths.md)
- [@exports](./tags-exports.md)
- [@module](./tags-module.md)

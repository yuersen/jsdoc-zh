# @alias

## 目录

- [语法](#语法)
- [概述](#概述)
- [示例](#示例)
- [相关链接](#相关链接)

## 语法

```
@alias <aliasNamepath>
```

## 概述

`@alias` 标签标记成员有一个别名。如果该成员有不同的名称，JSDoc 把所有引用作为这个成员。如果你在一个内部函数中定义一个类的时候，这个标签是非常有用的;在这种情况下，您可以使用 `@alias` 标签告诉 JSDoc，这个类如何在您的应用程序中暴露出来。

虽然 `@alias` 标签听起来类似于 [@name](./tags-name.md) 标签，但是他们的行为非常不同。`@name` 标签告诉 JSDoc 忽略与注释关联的所有代码。例如，当 JSDoc 处理下面的代码的时候，它忽略了 `bar` 的注释关联到一个 `foo` 函数：

```
/**
  * Bar function.
  * @name bar
  */
function foo() {}
```

`@alias` 标记告诉 JSDoc 这是一个伪装，成员 A 实际上叫做成员 B。例如，当 JSDoc 处理下面代码的时候，它承认 `foo` 是一个函数，然后在生产的文档中将 `foo` 改名为 `bar`：

```
/**
  * Bar function.
  * @alias bar
  */
function foo() {}
```

## 示例

假设你正在使用类框架，希望当你定义一个类的时候，你只要传递一个构造函数。您可以使用 `@alias` 标签告诉 JSDoc，这个类如何在您的应用程序中暴露出来。

在下面的例子中，在 `@alias` 标签告诉 JSDoc 处理匿名函数，就好像它是 `trackr.CookieManager` 类的构造函数。在这个函数中，JSDoc 将 `this` 关键字解释为 `trackr.CookieManager`，因此，“value”方法的 namepath(名称路径)为 `trackr.CookieManager＃value`。

例如，匿名的构造函数使用 `@alias`:

```javascript
Klass(
  "trackr.CookieManager",

  /**
   * @class
   * @alias trackr.CookieManager
   * @param {Object} kv
   */
  function(kv) {
    /** The value. */
    this.value = kv;
  }
);
```

您也可以在一个立即调用的函数表达式（IIFE）中创建的成员中使用 `@alias` 标签。`@alias` 标签告诉 JSDoc，这些成员都暴露在 IIFE 作用域之外的。

例如，命名空间的静态方法使用 `@alias`:

```javascript
/** @namespace */
var Apple = {};

(function(ns) {
  /**
   * @namespace
   * @alias Apple.Core
   */
  var core = {};

  /** Documented as Apple.Core.seed */
  core.seed = function() {};

  ns.Core = core;
})(Apple);
```

对于那些对象字面量中定义的成员，可以使用 `@alias` 标签替代的 [@lends](./tags-lends.md)标记。

```javascript
// Documenting objectA with @alias

var objectA = (function() {
  /**
   * Documented as objectA
   * @alias objectA
   * @namespace
   */
  var x = {
    /**
     * Documented as objectA.myProperty
     * @member
     */
    myProperty: "foo"
  };

  return x;
})();

// Documenting objectB with @lends

/**
 * Documented as objectB
 * @namespace
 */
var objectB = (function() {
  /** @lends objectB */
  var x = {
    /**
     * Documented as objectB.myProperty
     * @member
     */
    myProperty: "bar"
  };

  return x;
})();
```

## 相关链接

- [@name](./tags-name.md)
- [@lends](./tags-lends.md)

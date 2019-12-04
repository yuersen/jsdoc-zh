# @hideconstructor

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@hideconstructor
```

## 概述

`@hideconstructor` 标记告诉 JSDoc 生成的文档不应该显示类的构造函数。JSDoc 3.5.0 及更高版本中提供了此标记。

对于 ES2015 之前的类，请将此标记与 [@class](./tags-class.md) 或 [@constructor](./tags-class.md)标记结合使用。

对于 ES2015 类，请在构造函数的 JSDoc 注释中使用此标记。如果类没有显式构造函数，请在类的 JSDoc 注释中使用此标记。

## 实例

ES2015 之前的类带有 `@hideconstructor`:

```javascript
/**
 * @classdesc Toaster singleton.
 * @class
 * @hideconstructor
 */
var Toaster = (function() {
  var instance = null;

  function Toaster() {}

  /**
   * Toast an item.
   *
   * @alias toast
   * @memberof Toaster
   * @instance
   * @param {BreadyThing} item - The item to toast.
   * @return {Toast} A toasted bready thing.
   */
  Toaster.prototype.toast = function(item) {};

  return {
    /**
     * Get the Toaster instance.
     *
     * @alias Toaster.getInstance
     * @returns {Toaster} The Toaster instance.
     */
    getInstance: function() {
      if (instance === null) {
        instance = new Toaster();
        delete instance.constructor;
      }

      return instance;
    }
  };
})();
```

ES2015 类带有 `@hideconstructor`:

```javascript
/**
 * Waffle iron singleton.
 */
class WaffleIron {
  // Private field declarations
  #instance = null;

  /**
   * Create the waffle iron.
   *
   * @hideconstructor
   */
  constructor() {
    if (#instance) {
      return #instance;
    }

    /**
     * Cook a waffle.
     *
     * @param {Batter} batter - The waffle batter.
     * @return {Waffle} The cooked waffle.
     */
    this.cook = function(batter) {};

    this.#instance = this;
  }

  /**
   * Get the WaffleIron instance.
   *
   * @return {WaffleIron} The WaffleIron instance.
   */
  getInstance() {
    return new WaffleIron();
  }
}
```

## 相关链接

- [@class](./tags-class.md)

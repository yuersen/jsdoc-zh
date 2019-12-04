# @mixin

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@mixin [<MixinName>]
```

## 概述

`@mixin` 标签提供旨在被添加到其他对象的功能。然后，可以将 [@mixes](./tags-mixes.md) 标签添加到使用了该 mixin（混入）的对象上。

## 实例

使用 `@mixin` :

```js
/**
 * This provides methods used for event handling. It's not meant to
 * be used directly.
 *
 * @mixin
 */
var Eventful = {
  /**
   * Register a handler function to be called whenever this event is fired.
   * @param {string} eventName - Name of the event.
   * @param {function(Object)} handler - The handler to call.
   */
  on: function(eventName, handler) {
    // code...
  },

  /**
   * Fire an event, causing all handlers for that event name to run.
   * @param {string} eventName - Name of the event.
   * @param {Object} eventData - The data provided to each handler.
   */
  fire: function(eventName, eventData) {
    // code...
  }
};
```

## 相关链接

- [@borrows](./tags-borrows.md)
- [@class](./tags-class.md)
- [@mixes](./tags-mixes.md)

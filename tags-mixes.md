# @mixes

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@mixes <OtherObjectPath>
```

## 概述

`@mixes` 标签指示当前对象混入了 `OtherObjectPath` 对象的所有成员,被混入的对象就是一个 [@mixin](./tags-mixin.md)。

## 实例

用 `@mixin` 标签描述一个混入：

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

现在，我们添加一个 `FormButton` 类，并且调用 `mix` 函数，将 `Eventful` 的所有功能混入到 `FormButton`，这样 `FormButton` 也可以触发事件和监听了。我们使用 `@mixes` 标签，以表明 `FormButton` 混入了 `Eventful` 的功能。

使用 `@mixes` 标签：

```js
/**
 * @constructor FormButton
 * @mixes Eventful
 */
var FormButton = function() {
  // code...
};
FormButton.prototype.press = function() {
  this.fire('press', {});
}
mix(Eventful).into(FormButton.prototype);
```

## 相关链接

- [@borrows](./tags-borrows.md)
- [@class](./tags-class.md)
- [@mixin](./tags-mixin.md)

# @event

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@event <className>#[event:]<eventName>
```

## 概述

`@event` 标记可以触发的事件。典型事件由一个具有一组已定义属性的对象表示。

使用 `@event` 标记定义特定类型的事件后，可以使用 [`@fires`](./tags-fires.md) 标记指示方法可以触发该事件。还可以使用 [`@listens`](./tags-listens.md) 标记表明用这个表示来侦听该事件。

JSDoc 会自动将名称空间 `event:` 前置到每个事件的名称。通常，当链接到另一个 doclet 中的事件时，必须包含此命名空间（`@fires` 标签是一个特殊的例外，它可以让你忽略命名空间。）

注意：JSDoc 3 使用 `@event doclet`来记录事件的内容。相反，JSDoc Toolkit 2 使用 `@event doclets` 来标识在发生同名事件时可以触发的函数。

## 实例

下面的示例演示如何记录一个 Hurl 类中名为 snowball 事件。该事件包含一个带有单独属性的对象。

将函数调用记录为事件：

```javascript
/**
 * Throw a snowball.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function() {
  /**
   * Snowball event.
   *
   * @event Hurl#snowball
   * @type {object}
   * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
   */
  this.emit("snowball", {
    isPacked: this._snowball.isPacked
  });
};
```

使用一个命名 doclet 来描述一个事件：

```javascript
/**
 * Throw a snowball.
 *
 * @fires Hurl#snowball
 */
Hurl.prototype.snowball = function() {
  // ...
};

/**
 * Snowball event.
 *
 * @event Hurl#snowball
 * @type {object}
 * @property {boolean} isPacked - Indicates whether the snowball is tightly packed.
 */
```

## 相关链接

- [@fires](./tags-fires.md)
- [@listens](./tags-listens.md)

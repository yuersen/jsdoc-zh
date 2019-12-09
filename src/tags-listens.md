<!--
title: @listens
order: 339
author: yuer
-->

# @listens

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@listens <eventName>
```

## 概述

`@listens` 标记指示符号侦听指定的事件。使用 [@event](./tags-event.md)标记来记录事件的内容。

## 实例

下面的示例演示了如何记录名为 `module:hurler~event:snowball` 的事件，还有一个方法命名为 `module:playground/monitor.reportThrowage` 来监听事件。

描述一个事件和它的监听器:

```javascript
define("hurler", [], function() {
  /**
   * Event reporting that a snowball has been hurled.
   *
   * @event module:hurler~snowball
   * @property {number} velocity - The snowball's velocity, in meters per second.
   */

  /**
   * Snowball-hurling module.
   *
   * @module hurler
   */
  var exports = {
    /**
     * Attack an innocent (or guilty) person with a snowball.
     *
     * @method
     * @fires module:hurler~snowball
     */
    attack: function() {
      this.emit("snowball", { velocity: 10 });
    }
  };

  return exports;
});

define("playground/monitor", [], function() {
  /**
   * Keeps an eye out for snowball-throwers.
   *
   * @module playground/monitor
   */
  var exports = {
    /**
     * Report the throwing of a snowball.
     *
     * @method
     * @param {module:hurler~event:snowball} e - A snowball event.
     * @listens module:hurler~event:snowball
     */
    reportThrowage: function(e) {
      this.log("snowball thrown: velocity " + e.velocity);
    }
  };

  return exports;
});
```

## 相关链接

- [@event](./tags-event.md)
- [@fires](./tags-fires.md)

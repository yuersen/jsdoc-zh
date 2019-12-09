<!--
title: @fires
order: 323
author: yuer
-->

# @fires

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@emits
```

## 语法

```
@fires <className>#[event:]<eventName>
```

## 概述

`@fires` 标记表示方法在调用时可以触发指定类型的事件。使用 [@event](./tags-event.md)标记来记录事件的内容。

## 实例

方法将触发 "drain" 事件：

```
/**
 * Drink the milkshake.
 *
 * @fires Milkshake#drain
 */
Milkshake.prototype.drink = function() {
  // ...
};
```

## 相关链接

- [@event](./tags-event.md)
- [@listens](./tags-listens.md)
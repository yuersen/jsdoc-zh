# @this

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@this <namePath>
```

## 概述

`@this` 标签指明 `this` 关键字的指向。

## 实例

在下面的例子中，`@this` 标签迫使 `"this.name"` 被描述为 `"Greeter#name"`，而不是全局变量 `"name"`。

```js
/** @constructor */
function Greeter(name) {
  setName.apply(this, name);
}

/** @this Greeter */
function setName(name) {
  /** document me */
  this.name = name;
}
```

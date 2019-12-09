<!--
title: @memberof
order: 341
author: yuer
-->

# @memberof

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@memberof <parentNamepath>
@memberof! <parentNamepath>
```

## 概述

`@memberof` 标签标明成员隶属于哪一个父级标识符。

默认情况下，`@memberof` 标签标注的标识符是静态成员。对于内部成员和实例成员，你可以使用对应名称路径的符号，或明确标注 [@inner](./tags-inner.md) 或 [@instance](./tags-instance.md) 标签。

“强制的” `@memberof` 标签，`@memberof!` 强制对象被记录为属于特定的父级标识符，即使它有不同的父级标识符。

## 实例

在下面的示例中，`hammer` 函数通常被记录为全局函数。这是因为，事实上，它是一个全局函数，但它也是 `Tools` 命名空间的一个成员，这就是您想要记录它的方式。解决方案是添加 `@memberof` 标记。

使用 `@memberof`:

```js
/** @namespace */
var Tools = {};

/** @memberof Tools */
var hammer = function() {};

Tools.hammer = hammer;
```

对于类的实例成员，可以使用语法：`"@memberof ClassName.prototype"` 或者 `"@memberof ClassName#"`。另外也可以组合使用 `"@memberof ClassName"` 和 `@instance` 达到同样的效果。

在类原型上使用 `@memberof`：

```js
/** @class Observable */
create("Observable", {
  /**
   * This will be a static member, Observable.cache.
   * @memberof Observable
   */
  cache: [],

  /**
   * This will be an instance member, Observable#publish.
   * @memberof Observable.prototype
   */
  publish: function(msg) {},

  /**
   * This will also be an instance member, Observable#save.
   * @memberof Observable#
   */
  save: function() {},

  /**
   * This will also be an instance member, Observable#end.
   * @memberof Observable
   * @instance
   */
  end: function() {}
});
```

下面的示例使用强制 `@memberof` 标签，`@memberof!`，来描述对象(`Data#point`)的属性，它是一个类（Data）的实例成员。

当您使用 [@property](./tags-property.md) 标签记录一个属性的时候，则无法使用其 longname 连接到这个属性。我们可以使用 [@alias](./tags-alias.md) 和 `@memberof!` 来强制属性为可连接，告诉 JSDoc `Data#point.y` 应记录为 `Data#` 的成员 `point.y` 而不是 `Data#` 的 `point` 中的一员 `y`。

为对象属性使用 `@memberof!`：

```js
/** @class */
function Data() {
  /**
   * @type {object}
   * @property {number} y This will show up as a property of `Data#point`,
   * but you cannot link to the property as {@link Data#point.y}.
   */
  this.point = {
    /**
     * The @alias and @memberof! tags force JSDoc to document the
     * property as `point.x` (rather than `x`) and to be a member of
     * `Data#`. You can link to the property as {@link Data#point.x}.
     * @alias point.x
     * @memberof! Data#
     */
    x: 0,
    y: 1
  };
}
```

## 相关链接

- [@name](./tags-name.md)

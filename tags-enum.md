# @enum

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@enum [<type>]
```

## 概述

`@enum` 标记记录了一组静态属性，这些属性的值都属于同一类型。

枚举类似于属性的集合，只是枚举记录在其自己的 doc 注释中，而属性记录在其容器的 doc 注释中。此标记通常与 [@readonly](./tags-readonly.md) 一起使用，因为枚举通常表示常量的集合。

## 实例

这例子展示了如何记录一个表示具有三种可能状态的值的对象。请注意，如果您愿意，可以添加枚举成员的可选描述。还可以重写该类型，如“MAYBE”所示——默认情况下，枚举成员将使用与枚举本身相同的类型进行记录。

一个数字枚举，表示的3种状态：

```
/**
 * Enum for tri-state values.
 * @readonly
 * @enum {number}
 */
var triState = {
  /** The true value */
  TRUE: 1,
  FALSE: -1,
  /** @type {boolean} */
  MAYBE: true
};
```

## 相关链接

- [@property](./tags-property.md)


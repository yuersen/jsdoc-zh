<!--
title: @member
order: 340
author: yuer
-->

# @member

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 别名

```
@var
```

## 语法

```
@member [<type>] [<name>]
```

## 概述

`@member` 标记标识没有特殊类型的任意成员，例如“类”、“函数”或“常量”。成员可以选择具有类型和名称。

## 实例

`Data#point` 上使用 `@member`：

```
/** @class */
function Data() {
  /** @member {Object} */
  this.point = {};
}
```

下面是使用 `@var` 的一个例子，`@member` 的别名，来描述一个（虚拟）变量'foo'。

```
/**
 * A variable in the global namespace called 'foo'.
 * @var {number} foo
 */
```

上面的例子等价于：

```
/**
 * A variable in the global namespace called 'foo'.
 * @type {number}
 */
var foo;
```

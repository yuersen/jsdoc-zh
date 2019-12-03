# @deprecated

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@deprecated [<some text>]
```

## 概述

`@deprecated` 标签指明一个标识在代码中已经被弃用。

## 实例

可以单独使用的 `@deprecated` 标签，或包括一些文本，来详细说明为什么要弃用。

```
/**
 * @deprecated since version 2.0
 */
function old() {}
```


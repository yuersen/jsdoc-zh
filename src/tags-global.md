<!--
title: @global
order: 326
author: yuer
-->

# @global

## 目录

-[语法](#语法)
-[概述](#概述)
-[实例](#实例)
-[相关链接](#相关链接)

## 语法

```
@global
```

## 概述

`@global` 标记指定一个符号应作为全局符号出现在文档中。JSDoc 忽略源文件中符号的实际作用域。此标记对于在本地定义然后指定给全局符号的符号特别有用。

## 实例

使用 `@global` 标签来指定一个标识应记录为全局。

将内部变量记录为全局变量:

```javascript
(function() {
  /** @global */
  var foo = 'hello foo';

  this.foo = foo;
}).apply(window);
```

## 相关链接

- [@inner](./tags-inner.md)
- [@instance](./tags-instance.md)
- [@memberof](./tags-memberof.md)
- [@static](./tags-static.md)


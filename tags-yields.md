# @yields

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@yield
```

## 语法

```
@yields [{type}] [description]
```

## 概述

`@yields` 标记记录生成器函数生成的值。JSDoc 3.5.0 及更高版本中提供了此标记。

如果要记录常规函数，请使用 [@returns](./tags-returns.md) 标记而不是此标记。

## 实例

带有类型的 `@yields`:

```
/**
 * Generate the Fibonacci sequence of numbers.
 *
 * @yields {number}
 */
function* fibonacci() {}
```

带有类型和描述的 `@yields`:

```
/**
 * Generate the Fibonacci sequence of numbers.
 *
 * @yields {number} The next number in the Fibonacci sequence.
 */
function* fibonacci() {}
```

## 相关链接

- [@returns](./tags-returns.md)

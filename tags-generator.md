# @generator

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@generator
```

## 概述

`@generator` 标记表示函数是一个生成器函数，这意味着它是使用语法函数 `*foo () {}` 声明的。JSDoc 3.5.0 及更高版本中提供了此标记。

一般来说，不需要使用此标记，因为 JSDoc 会自动检测生成器函数并在生成的文档中标识它们。但是，如果您正在为代码中没有出现的生成器函数编写虚拟注释，则可以使用此标记告诉 JSDoc 该函数是生成器函数。

## 实例

以下示例显示使用 `@generator` 标记的虚拟注释。

带有 `@generator` 标记的虚拟注释:

```
/**
 * Generate numbers in the Fibonacci sequence.
 *
 * @generator
 * @function fibonacci
 * @yields {number} The next number in the Fibonacci sequence.
 */
```


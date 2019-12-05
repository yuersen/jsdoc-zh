# @see

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@see <namepath>
@see <text>
```

## 概述

`@see` 标签表示可以参考另一个标识符的说明文档，或者一个外部资源。您可以提供一个标识符的 `namepath` 或自由格式的文本。如果你提供了一个 `namepath`，JSDoc 的默认模板会自动将 `namepath` 转换成链接。

## 实例

使用 `@see` 标签：

```js
/**
 * Both of these will link to the bar function.
 * @see {@link bar}
 * @see bar
 */
function foo() {}

// Use the inline {@link} tag to include a link within a free-form description.
/**
 * @see {@link foo} for further information.
 * @see {@link http://github.com|GitHub}
 */
function bar() {}
```

## 相关链接

- [{@link}](./tags-inline-link.md)
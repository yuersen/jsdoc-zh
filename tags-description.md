# @description

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@desc
```

## 语法

```
@description <some description>
```

## 概述

`@description` 标记允许提供正在记录一般说明。描述可以包括 HTML 标记。如果启用了 [Markdown 插件](./about-plugins-markdown.md)，它也可包括 Markdown 格式。

## 实例

如果在注释开始的地方添加描述，那么可省略 `@description` 标签。

```javascript
/**
 * Add two numbers.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}
```

通过使用 `@description` 标签添加的描述可放在 JSDoc 的任意地方。

```javascript
/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 * @description Add two numbers.
 */
function add(a, b) {
  return a + b;
}
```


如果 JSDoc注 释的开头同时有一个描述和一个带有 `@description` 标记的描述，那么用 `@description` 指定的描述将覆盖注释开头的描述。

## 相关链接

- [@classdesc](./tags-classdesc.md)
- [@summary](./tags-summary.md)

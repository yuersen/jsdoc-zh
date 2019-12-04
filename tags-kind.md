# @kind

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@kind <kindName>
```

`<kindName>` 取值为：

- `class`
- `constant`
- `event`
- `external`
- `file`
- `function`
- `member`
- `mixin`
- `module`
- `namespace`
- `typedef`

## 概述

`@kind` 标签是用来指明什么样的标识符被描述（例如，一类或模块）。标识符 `kind` 不同于标识符 `type`（例如，字符串或布尔）。

通常你不需要 `@kind` 标签，因为标识符的 `kind` 是由 doclet 的其他标记来确定。例如，使用 [@class](./tags-class.md) 标签自动意味着 `@kind class`，使用 [@namespace](./tags-namespaces.md) 标签则意味着 `@kind namespace`。

## 实例

使用 `@kind`：

```
// The following examples produce the same result:

/**
 * A constant.
 * @kind constant
 */
const asdf = 1;

/**
 * A constant.
 * @constant
 */
const asdf = 1;
```

`kind` 标签可能引起冲突（例如，使用 [@module](./tags-module.md)，表示他的 `kind` 为 `module`，同时，又使用了 `@kind constant`，表示他的 `kind` 为 `constant`），在这种情况下最后的标签决定 `kind` 的值。

冲突的 `@kind` 语句：

```
/**
 * This will show up as a constant
 * @module myModule
 * @kind constant
 */

/**
 * This will show up as a module.
 * @kind constant
 * @module myModule
 */
```

## 相关链接

- [@type](./tags-type.md)


# @namespace

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@namespace [[{<type>}] <SomeName>]
```

## 概述

`@namespace` 标记表示对象为其成员创建命名空间。您还可以编写一个虚拟 JSDoc 注释来定义代码使用的命名空间。

如果一个命名空间是由除对象字面量以为的标识符定义的，您可以包括一个 `type` 的表达式，跟在 `@namespace` 标签后面。如果 `@namespace` 标签包括一个 `type`，那么它也必须包含一个名称。

您可能需要描述一个命名空间，其名称中包含特殊字符，如"#" 或 "!"。在这些情况下，当你的描述或链接到这个命名空间时，你必须将命名空间中特殊符号部分使用双引号括起来。详情参见下面的例子。

## 实例

对象上使用 `@namespace` 标签：

```
/**
 * My namespace.
 * @namespace
 */
var MyNamespace = {
  /** documented as MyNamespace.foo */
  foo: function() {},
  /** documented as MyNamespace.bar */
  bar: 1
};
```

为虚拟注释加上 `@namespace` 标签：

```
/**
 * A namespace.
 * @namespace MyNamespace
 */

/**
 * A function in MyNamespace (MyNamespace.myFunction).
 * @function myFunction
 * @memberof MyNamespace
 */
```

如果 `@namespace` 的名称包括特殊字符，你必须将命名空间中特殊符号部分使用双引号括起来。如果名称已经包含一个或多个双引号，那么使用反斜线（`\`）转义双引号。

在特殊的成员名称上使用 `@namespace` 标签：

```
/** @namespace window */

/**
 * Shorthand for the alert function.
 * Refer to it as {@link window."!"} (note the double quotes).
 */
window["!"] = function(msg) { alert(msg); };
```

## 相关链接

- [@module](./tags-module.md)

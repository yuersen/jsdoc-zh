# @property

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@prop
```

## 语法

```
@property <type> <name> [<description>]
```

## 概述

`@property` 标记是一种方便地记录类、命名空间或其他对象的静态属性列表的方法。

通常，JSDoc 模板将创建一个完整的新页面，以显示有关嵌套命名空间层次结构的每个级别的信息。有时，您真正想要的是在同一页上列出所有属性，包括嵌套属性。

请注意，属性标记必须在文档注释中使用，例如它们是命名空间或类的属性。此标记用于静态属性的简单集合，不允许为每个属性提供 `@examples` 或类似的复杂信息，仅提供类型、名称和描述。

## 实例

在这个例子中，我们有一个名为 `config` 的命名空间。我们想要所有有关默认属性及嵌套值的信息，输出到与 `config` 同一个页面上。

描述命名空间的默认属性及嵌套属性：

```js
/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
  defaults: {
    players: 1,
    level:   'beginner',
    treasure: {
      gold: 0
    }
  }
};
```

下面的示例演示如何指示属性是可选的。

```
/**
 * User type definition
 * @typedef {Object} User
 * @property {string} email
 * @property {string} [nickName]
 */
```

## 相关链接

- [@enum](./tags-enum.md)
- [@member](./tags-member.md)

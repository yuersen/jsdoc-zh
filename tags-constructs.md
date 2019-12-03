# @constructs

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@constructs [<name>]
```

## 概述

当使用对象字面量形式定义类（例如使用 [@lends](./tags-lends.md) 标签）时，可使用 `@constructs` 标签标明这个函数用来作为类的构造实例。

## 实例

`@constructs` 和 `@lends` 结合使用：

```javascript
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /** @constructs */
    initialize: function(name) {
      this.name = name;
    },
    /** Describe me. */
    say: function(message) {
      return this.name + " says: " + message;
    }
  }
);
```

不和 `@lends` 结合使用的时候，你必须提供一个类的名称:

```javascript
makeClass(
  "Menu",
  /**
   * @constructs Menu
   * @param items
   */
  function(items) {},
  {
    /** @memberof Menu# */
    show: function() {}
  }
);
```

## 相关链接

- [@lends](./tags-lends.md)
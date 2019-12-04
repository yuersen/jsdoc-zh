# @lends

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@lends <namepath>
```

## 概述

`@lends` 标签允许将一个字面量对象的所有成员标记为某个标识符的成员，就像他们是给定名称的标识符成员。如果要将对象文字传递给从其成员创建命名类的函数，则可能需要执行此操作。

## 实例

在本例中，我们希望使用一个 `helper` 函数来创建一个名为 `Person` 的类，以及名为 `initialize` 和 `say` 的实例方法。这与一些流行的框架处理类创建的方式类似。

示例类:

```javascript
// We want to document this as being a class
var Person = makeClass(
  // We want to document these as being methods
  {
    initialize: function(name) {
      this.name = name;
    },
    say: function(message) {
      return this.name + " says: " + message;
    }
  }
);
```

如果没有任何注释，JSDoc 将无法识别这段代码使用两个方法创建一个 `Person` 类。要记录这些方法，我们必须在 doc 注释中紧靠对象文本之前使用 `@lends` 标记。`@lends` 标记告诉 JSDoc，该对象文本的所有成员名称都被“借用”给一个名为 `Person` 的变量。我们还必须为每种方法添加注释。

下面的例子让我们更接近我们想要的：

```javascript
/** @class */
var Person = makeClass(
  /** @lends Person */
  {
    /**
     * Create a `Person` instance.
     * @param {string} name - The person's name.
     */
    initialize: function(name) {
      this.name = name;
    },
    /**
     * Say something.
     * @param {string} message - The message to say.
     * @returns {string} The complete message.
     */
    say: function(message) {
      return this.name + " says: " + message;
    }
  }
);
```

现在名为 `initialize` 和 `say` 的函数会被文档化，但它们被标记为 `Person` 类的静态方法。这可能是你期望的，但有种情况下我们想要 `initialize` 和 `say` 属于 `Person` 类的实例。所以，我们通过少做改动,使其成为原型的方法。

标记为实例方法:

```javascript
/** @class */
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /**
     * Create a `Person` instance.
     * @param {string} name - The person's name.
     */
    initialize: function(name) {
      this.name = name;
    },
    /**
     * Say something.
     * @param {string} message - The message to say.
     * @returns {string} The complete message.
     */
    say: function(message) {
      return this.name + " says: " + message;
    }
  }
);
```

最后一步：我们的类框架使用借出的 `initialize` 函数来构造 `Person` 实例，但是 `Person` 实例没有自己的 `initialize` 方法。解决方案是将 `@constructs` 标记添加到借出的函数中。记住也要删除 `@class` 标记，否则会记录两个类。

与构造器一起记录:

```javascript
var Person = makeClass(
  /** @lends Person.prototype */
  {
    /**
     * Create a `Person` instance.
     * @constructs
     * @param {string} name - The person's name.
     */
    initialize: function(name) {
      this.name = name;
    },
    /**
     * Say something.
     * @param {string} message - The message to say.
     * @returns {string} The complete message.
     */
    say: function(message) {
      return this.name + " says: " + message;
    }
  }
);
```

## 相关链接

- [@borrows](./tags-borrows.md)
- [@constructs](./tags-constructs.md)

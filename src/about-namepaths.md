<!--
title: JSDoc 3中使用名称路径
order: 102
author: yuer
-->

# JSDoc 3中使用名称路径

## 目录

- [名称路径](#jsdoc3-中的名称路径)
- [相关链接](#相关链接)

## JSDoc3 中的名称路径

如果涉及到一个 JavaScript 变量，这个变量在文档中的其他地方，你必须提供一个唯一标识符映射到该变量。名称路径提供了一种这样做的方法，并且消除实例成员，静态成员和内部变量之间的歧义。

JSDoc 3 中名称路径的基本语法示例：

```
myFunction
MyConstructor
MyConstructor#instanceMember
MyConstructor.staticMember
MyConstructor~innerMember // note that JSDoc 2 uses a dash
```

下面给出了例子：一个名为"say"的**实例方法**，一个名为"say"的**内部函数**,和同样名为"say"的**静态方法**。这三种不同的方法,都是彼此独立地存在的。

例如，使用一个文档化标签来描述你的代码

```javascript
/** @constructor */
Person = function() {
  this.say = function() {
    return "I'm an instance.";
  }

  function say() {
    return "I'm inner.";
  }
}
Person.say = function() {
  return "I'm static.";
}

var p = new Person();
p.say();      // I'm an instance.
Person.say(); // I'm static.
// there is no way to directly access the inner function from here
```

你可以使用三种不同的名称路径语法来表示这三种不同的方法。

例如，使用一个文档化标签来描述你的代码：

```
Person#say  // 名为"say"的实例方法
Person.say  // 名为"say"的静态方法
Person~say  // 名为"say"的内部函数
```

你可能会惊讶，既然内部方法不能在它被定义的函数外部直接访问，那么为什么还有语法来引用这个内部方法，虽然这是正确的，这个“〜”语法很少使用，内部方法有可能被引用到另一种方法的容器中被返回出来，因此在你的代码其他地方的一些对象有可能借用这个内部方法。

需要注意的是，如果一个构造函数有一个实例成员，这个实例成员也是一个构造器，那么你可以简单地将名称路径连接在一起，形成一个较长名路径名：

例如，使用一个文档化标签来描述你的代码：

```
/** @constructor */
Person = function() {
  /** @constructor */
  this.Idea = function() {
    this.consider = function(){
      return "hmmm";
    }
  }
}

var p = new Person();
var i = new p.Idea();
i.consider();
```

在这种情况下，引用名为"consider"的方法，你可以使用下面的名路径名：`Person#Idea#consider`

这种链接可与连接符号（`#`,`.`,`~`）任意组合使用。

**特殊情况**：模块，外部组件和事件。

```
/** A module. Its name is module:foo/bar.
 * @module foo/bar
 */
 
/** The built in string object. Its name is external:String.
 * @external String
 */

/** An event. Its name is module:foo/bar.event:MyEvent.
 * @event module:foo/bar.event:MyEvent
 */
```

使用名称路径也有一些特殊的情况：[@module](./tags-module.md) 名称由"module:"前缀，[@external](./tags-external.md) 名称由"external:"前缀，[@event](./tags-event.md) 名称由"event:"前缀。

在名称中，对象的名称路径中带有特殊字符。

```
/** @namespace */
var chat = {
  /**
   * Refer to this by {@link chat."#channel"}.
   * @namespace
   */
  "#channel": {
    /**
     * Refer to this by {@link chat."#channel".open}.
     * @type {boolean}
     * @defaultvalue
     */
    open: true,
    /**
     * Internal quotes have to be escaped by backslash. This is
     * {@link chat."#channel"."say-\"hello\""}.
     */
    'say-"hello"': function (msg) {}
  }
};

/**
 * Now we define an event in our {@link chat."#channel"} namespace.
 * @event chat."#channel"."op:announce-motd"
 */
```

上面这个例子中，一个命名空间中的成员名称有带有特殊字符（哈希字符`#`号，破折号，双引号）。这种情况下，你需要这样引用这些名字：`chat."#channel"`, `chat."#channel"."op:announce-motd"`，等等。在名称内部的双引号应该用反斜杠转义：`chat."#channel"."say-\"hello\""`。

## 相关链接

- [Block and inline tags](./about-block-inline-tags.md)
- [{@link}](./tags-inline-link.md)
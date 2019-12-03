# @augments

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@extends
```

## 语法

```
@augments <namepath>
```

## 概述

`@augments` 或 `@extends` 标签指明标识符继承自哪个父类，后面需要加父类名。你可以使用这个标签来记录基于类和并基于原型的继承。

在 JSDoc3.3.0 或更高版本中，如果一个标识符继承自多个父类，并且多个父类有同名的成员，JSDoc 使用来自列出的 JSDoc 注释中最后一个父类的文档。

## 实例

在下面的例子中，`Duck` 类被定义为 `Animal` 的子类。`Duck` 实例和 `Animal` 实例具有相同的属性，`speak` 方法是 `Duck` 实例所独有的。

```javascript
/**
 * @constructor
 */
function Animal() {
  /** Is this animal alive? */
  this.alive = true;
}

/**
 * @constructor
 * @augments Animal
 */
function Duck() {}
Duck.prototype = new Animal();

/** What do ducks say? */
Duck.prototype.speak = function() {
  if (this.alive) {
    alert("Quack!");
  }
};

var d = new Duck();
d.speak(); // Quack!
d.alive = false;
d.speak(); // (nothing)
```

在下面的例子中，`Duck` 类继承自 `Flyable` 和 `Bird` 类，这两个父类都定义了一个 `takeOff` 方法。由于 `@augments Bird` 是在 `Duck` 文档列表中最后，JSDoc 自动使用 `Bird#takeOff` 注释来记录 `Duck#takeOff`。

例如，用重写方法来实现多重继承：

```javascript
/**
 * Abstract class for things that can fly.
 * @class
 */
function Flyable() {
  this.canFly = true;
}

/** Take off. */
Flyable.prototype.takeOff = function() {
  // ...
};

/**
 * Abstract class representing a bird.
 * @class
 */
function Bird(canFly) {
  this.canFly = canFly;
}

/** Spread your wings and fly, if possible. */
Bird.prototype.takeOff = function() {
  if (this.canFly) {
    this._spreadWings()
      ._run()
      ._flapWings();
  }
};

/**
 * Class representing a duck.
 * @class
 * @augments Flyable
 * @augments Bird
 */
function Duck() {}

// Described in the docs as "Spread your wings and fly, if possible."
Duck.prototype.takeOff = function() {
  // ...
};
```

## 相关链接

- [@borrows](./tags-borrows.md)
- [@class](./tags-class.md)
- [@mixes](./tags-mixes.md)
- [@mixin](./tags-mixin.md)

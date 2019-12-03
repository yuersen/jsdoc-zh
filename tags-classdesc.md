# @classdesc

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@classdesc <some description>
```

## 概述

`@classdesc` 标签用于为类提供一个描述，这样和构造函数的描述区分开来。@classdesc标签应该与 [@class](./tags-class.md) (或 [@constructor](./tags-class.md))标签

结合使用。

在JSDoc 3 中 @classdesc标签的功能和以前版本中的@class标签的功能是重复的。截至第3版，@class标签的语法和功能和现在的@constructor标签是完全匹配的，并且@classdesc标签更明确地传达其目的：记录一类的描述。

## 实例

如下所示，一个类有两个添加描述的地方，一个适用于函数本身，而另一个一般适用于类。

一个同时具有构造函数描述和类说明的 doclet：

```javascript
/**
 * This is a description of the MyClass constructor function.
 * @class
 * @classdesc This is a description of the MyClass class.
 */
function MyClass() {}
```

## 相关链接

- [@class](./tags-class.md)
- [@description](./tags-description.md)

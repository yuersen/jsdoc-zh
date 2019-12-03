# @abstract

## 目录

- [别名](#别名)
- [概述](#概述)
- [示例](#示例)

## 别名

`@virtual`

## 概述

`@abstract` 标记标识必须由继承该成员的对象实现（或重写）的成员。

## 示例

例如，父类的抽象方法，子类实现该方法：

```javascript
/**
  * Generic dairy product.
  * @constructor
  */
function DairyProduct() {}

/**
  * Check whether the dairy product is solid at room temperature.
  * @abstract
  * @return {boolean}
  */
DairyProduct.prototype.isSolid = function() {
  throw new Error('must be implemented by subclass!');
};

/**
  * Cool, refreshing milk.
  * @constructor
  * @augments DairyProduct
  */
function Milk() {}

/**
  * Check whether milk is solid at room temperature.
  * @return {boolean} Always returns false.
  */
Milk.prototype.isSolid = function() {
  return false;
};
```

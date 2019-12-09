<!--
title: @external
order: 321
author: yuer
-->

# @external

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 别名

```
@host
```

## 语法

```
@external <nameOfExternal>
```

## 概述

`@external` 标记标识在当前包外部定义的类、命名空间或模块。通过使用此标记，可以将包的扩展记录到外部符号，也可以向包的用户提供有关外部符号的信息。还可以在任何其他 JSDoc 标记中引用外部符号的 namepath。

外部符号的 namepath 始终使用前缀 `external:`（例如，`{@link external:Foo}` 或 `@augments external:Foo`）。但是，可以从 `@external` 标记中省略此前缀。

注意：只能在你的项目之外定义的最高级别的标识上添加 `@external` 标签，请参见“描述一个嵌套的外部标识”的例子。

## 实例

以下示例显示如何将内置字符串对象作为外部对象以及新的实例方法 `external:String#rot13` 进行文档记录。

记录添加到内置类的方法:

```
/**
 * The built in string object.
 * @external String
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String|String}
 */

/**
 * Create a ROT13-encoded version of the string. Added by the `foo` package.
 * @function external:String#rot13
 * @example
 * var greeting = new String('hello world');
 * console.log( greeting.rot13() ); // uryyb jbeyq
 */
```

下面的例子中描述一个新 `starfairy` 功能如何添加到外部的 `jQuery.fn` 命名空间。

描述的外部的命名空间：

```
/**
 * The jQuery plugin namespace.
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

/**
 * A jQuery plugin to make stars fly around your home page.
 * @function external:"jQuery.fn".starfairy
 */
```

在下面的例子中，`EncryptedRequest` 类被描述为内置的 `XMLHttpRequest` 类的子类。

```
/**
 * The built-in class for sending HTTP requests.
 * @external XMLHttpRequest
 * @see https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
 */

/**
 * Extends the built-in `XMLHttpRequest` class to send data encoded with a secret key.
 * @class EncodedRequest
 * @extends external:XMLHttpRequest
 */
```

只能将 `@external` 标签添加到项目定义的最外最顶层。在下面的例子中，描述的是外部的 `security.TLS` 类。其结果是，`@external` 标签是用来描述外部的 `external:security` 命名空间，而不是外部类 `external:security.TLS`。

记录一个嵌套的外部标识：

```
/**
 * External namespace for security-related classes.
 * @external security
 * @see http://example.org/docs/security
 */

/**
 * External class that provides Transport Layer Security (TLS) encryption.
 * @class TLS
 * @memberof external:security
 */
```

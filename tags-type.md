# @type

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@type {typeName}
```

## 概述

`@type` 标记允许您提供一个类型表达式，用于标识符号可能包含的值类型或函数返回的值类型。您还可以将类型表达式包含在许多其他 JSDoc 标记中，比如 [@param](./tags-param.md) 标记。

类型表达式可以包括符号的 JSDoc namepath（例如，`myNamespace.MyClass`）、内置的 JavaScript 类型（例如，string）或它们的组合。您可以使用任何 Google Closure Compiler 编译器类型表达式，以及特定于JSDoc的其他几种格式。

如果 JSDoc 确定类型表达式无效，它将显示错误并停止运行。通过使用 `--lenient` 选项运行 JSDoc，可以将此错误转换为警告。

注意：JSDoc 3.2 和更高版本中完全支持 Google Closure Compiler 编译器样式的类型表达式。JSDoc 的早期版本包括对闭包编译器类型表达式的部分支持。

通过使用下面描述的格式之一提供类型表达式来指定每个类型。在适当的情况下，JSDoc 将自动为其他符号创建指向文档的链接。例如，如果该符号已被文档化，`@type {MyClass}`将链接到 `MyClass` 文档。

### Symbol name (name expression)

```
{boolean}
{myNamespace.MyClass}
```

指定符号的名称。如果标识符已经被文档化，JSDoc 将创建一个链接到该标识符的文档。

### Multiple types (type union)

```
{(number|boolean)}
```

这意味着值可能是几种类型中的一种，用括号括起来，并用"|"分隔类型的完整列表。

### Arrays and objects (type applications and record types)

MyClass的实例的数组:

```
{Array.<MyClass>}
// or:
{MyClass[]}
```

具有字符串键和数值的对象：

```
{Object.<string, number>}
```

名为 `myObj` 的对象，属性为“a”（数字）、“b”（字符串）和“c”（任何类型）:

```
{{a: number, b: string, c}} myObj
// or:
{Object} myObj
{number} myObj.a
{string} myObj.b
{*} myObj.c
```

JSDoc 支持 Closure Compiler 语法定义的数组和对象类型。

还可以通过数组后面附加`[]`指示包含在数组中的类型。例如，表达式`string[]`表示字符串数组。

对于具有一组已知的属性的对象，你可以使用 Closure Compiler 语法文档化标注的类型。也可以分别描述每个属性，这使您能够提供有关每个属性的更多详细信息。

### Nullable type

一个数字或空值：

```
{?number}
```

指明类型为指定的类型，或者为 `null`。

### Non-nullable type

一个数字，但是绝对不会是 `null`:

```
{!number}
```

指明类型为指定的类型，但是绝对不会是 `null`。

### Variable number of that type

此函数接受可变数量的数值参数:

```
@param {...number} num
```

指示函数接受可变数目的参数，并指定参数的类型。例如：

```js
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num A positive or negative number
 */
function sum(num) {
  var i=0, n=arguments.length, t=0;
  for (; i<n; i++) {
    t += arguments[i];
  }
  return t;
}
```

### Optional parameter

一个可选参数 `foo`:

```
@param {number} [foo]
// or:
@param {number=} foo
```

一个可选参数 `foo`，默认值为 `1`:

```
@param {number} [foo=1]
```

表示该参数是可选的。当对可选参数使用 JSDoc 的语法时，还可以显示在省略参数时将使用的值。

### Callbacks

```
/**
 * @callback myCallback
 * @param {number} x - ...
 */

/** @type {myCallback} */
var cb;
```

使用 `@callback` 标签指明一个回调。和 `@typedef` 标签是相同的，不同之处在于回调的类型始终是"function"。

### Type definitions

记录 `id`, `name`, `age` 属性的类型：

```
/**
 * @typedef PropertiesHash
 * @type {object}
 * @property {string} id - an ID.
 * @property {string} name - your name.
 * @property {number} age - your age.
 */

/** @type {PropertiesHash} */
var props;
```

您可以使用 `@typedef` 标签记录复杂类型，然后参考类型定义在你文档的其他地方。

## 实例

```
/** @type {(string|Array.)} */
var foo;
/** @type {number} */
var bar = 1;
```

在许多情况下，您可以包含一个类型表达式作为另一个标签的一部分，而不是在 JSDoc 注释块中包含独立 `@type` 标签。

类型表达式可以有多个标签：

```
/**
 * @type {number}
 * @const
 */
var FOO = 1;

// same as:

/** @const {number} */
var FOO = 1;
```

## 相关链接

- [@callback](./tags-callback.md)
- [@typedef](./tags-typedef.md)
- [@param](./tags-param.md)
- [@property](./tags-property.md)


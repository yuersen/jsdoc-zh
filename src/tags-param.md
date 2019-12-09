<!--
title: @param
order: 349
author: yuer
-->

# @param

## 目录

- [别名](#别名)
- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 别名

```
@arg
@argument
```

## 语法

```
@param [<type>] <name> [<description>]
```

## 概述

`@param` 标记提供函数参数的名称、类型和描述。

`@param` 标记要求您指定要记录的参数的名称。您还可以包括括在大括号中的参数类型和参数说明。

参数类型可以是内置的 JavaScript 类型，例如字符串或对象，也可以是代码中另一个符号的 JSDoc namepath。如果您已经在 namepath 中为该符号编写了文档，JSDoc 将自动链接到该符号的文档。您还可以使用类型表达式来指示参数不可为空或可以接受任何类型；有关详细信息，请参阅 [@type](./tags-type.md) 标记文档。

如果您提供了一个描述，那么可以通过在描述之前插入一个连字符，使 JSDoc 注释更具可读性。务必在连字符前后加一个空格。

## 实例

### 名称, 类型, 和说明

下面的示例演示如何在 `@param` 标签中包含名称，类型，和说明。

只注释变量名称:

```
/**
 * @param somebody
 */
function sayHello(somebody) {
  alert('Hello ' + somebody);
}
```

注释变量名和变量类型:

```
/**
 * @param {string} somebody
 */
function sayHello(somebody) {
  alert('Hello ' + somebody);
}
```

注释变量名、变量类型和变量说明:

```
/**
 * @param {string} somebody Somebody's name.
 */
function sayHello(somebody) {
  alert('Hello ' + somebody);
}
```

可以在变量说明前加个连字符，使之更加容易阅读:

```
/**
 * @param {string} somebody - Somebody's name.
 */
function sayHello(somebody) {
  alert('Hello ' + somebody);
}
```

### 具有属性的参数

如果参数需要具有特定属性，则可以通过提供额外的 `@param` 标记来记录该属性。例如，如果希望 `employee` 参数具有 `name` 和 `department` 属性，则可以按如下方式记录该参数.

记录参数的属性:

```
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function(employee) {
  // ...
};
```

如果一个参数在没有显式名称的情况下被解构，您可以给这个对象一个合适的名称并记录它的属性。

记录解构参数:

```
/**
 * Assign the project to an employee.
 * @param {Object} employee - The employee who is responsible for the project.
 * @param {string} employee.name - The name of the employee.
 * @param {string} employee.department - The employee's department.
 */
Project.prototype.assign = function({ name, department }) {
  // ...
};
```

还可以将此语法与 JSDoc 的数组参数语法相结合。例如，如果可以将多个 `employees` 分配给一个 `project`。

记录数组中值的属性：

```
/**
 * Assign the project to a list of employees.
 * @param {Object[]} employees - The employees who are responsible for the project.
 * @param {string} employees[].name - The name of an employee.
 * @param {string} employees[].department - The employee's department.
 */
Project.prototype.assign = function(employees) {
  // ...
};
```

### 可选参数和默认值

下面的例子说明如何描述一个参数是可选的，并且具有默认值。

一个可选参数（使用 JSDoc 语法）：

```js
/**
 * @param {string} [somebody] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = "John Doe";
  }
  alert("Hello " + somebody);
}
```

一个可选参数（ 使用Google Closure Compiler 语法）：

```js
/**
 * @param {string=} somebody - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}
```

一个可选参数和默认值：

```js
/**
 * @param {string} [somebody=John Doe] - Somebody's name.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  }
  alert('Hello ' + somebody);
}
```

### 多种类型和可重复参数

下面的例子演示了如何使用类型的表达式来表示一个参数可以接受多种类型（或任何类型），还有一个参数可以被多次使用。有关 JSDoc 支持的类型表达式细节请参阅 [@type](./tags-type.md) 标签文档。

允许一个类型或另一个类型：

```js
/**
 * @param {(string|string[])} [somebody=John Doe] - Somebody's name, or an array of names.
 */
function sayHello(somebody) {
  if (!somebody) {
    somebody = 'John Doe';
  } else if (Array.isArray(somebody)) {
    somebody = somebody.join(', ');
  }
  alert('Hello ' + somebody);
}
```

允许任何类型：

```js
/**
 * @param {*} somebody - Whatever you want.
 */
function sayHello(somebody) {
  console.log('Hello ' + JSON.stringify(somebody));
}
```

可重复使用的参数：

```js
/**
 * Returns the sum of all numbers passed to the function.
 * @param {...number} num - A positive or negative number.
 */
function sum(num) {
  var i = 0, n = arguments.length, t = 0;
  for (; i < n; i++) {
    t += arguments[i];
  }
  return t;
}
```

### 回调函数

如果参数接受一个回调函数，您可以使用 [@callback](./tags-callback.md) 标签来定义一个回调类型，然后回调类型包含到 `@param` 标签中。

```js
/**
 * This callback type is called `requestCallback` and is displayed as a global symbol.
 *
 * @callback requestCallback
 * @param {number} responseCode
 * @param {string} responseMessage
 */

/**
 * Does something asynchronously and executes the callback on completion.
 * @param {requestCallback} cb - The callback that handles the response.
 */
function doSomethingAsynchronously(cb) {
  // code
};
```

## 相关链接

- [@callback](./tags-callback.md)
- [@returns](./tags-returns.md)
- [@type](./tags-type.md)
- [@typedef](./tags-typedef.md)

# @license

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@license <identifier>
```

## 概述

`@license` 标记标识应用于代码任何部分的软件许可证。

您可以使用任何文本来标识正在使用的许可证。如果代码使用标准的开源许可证，请考虑使用[the Software Package Data Exchange (SPDX) License List](https://spdx.org/licenses/)中的相应标识符。

一些 JavaScript 处理工具，比如 Google 的 Closure 编译器，会自动保存任何包含 `@license` 标记的 JSDoc 注释。如果您正在使用其中一个工具，您可能希望添加一个独立的 JSDoc 注释，该注释包括 `@license` 标记以及许可证的整个文本，以便许可证文本将包含在生成的JavaScript 文件中。

## 实例

在Apache 2.0 许可下分发的模块：

```
/**
 * Utility functions for the foo package.
 * @module foo/util
 * @license Apache-2.0
 */
```

一个独立的 JSDoc 注释块，包含完整的MIT许可:

```
/**
 * @license
 * Copyright (c) 2015 Example Corporation Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
```

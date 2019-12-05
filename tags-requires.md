# @require

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)

## 语法

```
@requires <someModuleName>
```

## 概述

`@requires` 标签可以记录一个模块需要的依赖项。一个 JSDoc 注释块可以有多个 `@require` 标签。模块名可以被指定为 "moduleName" 或者 "module:moduleName";这两种形式将被解析为模块。

JSDoc 不会尝试处理被包含的模块。如果您希望该模块包含到文档中，您必须将模块包含到 JavaScript 文件列表进行处理。

## 实例

使用 `@requires` 标签:

```js
/**
 * This class requires the modules {@link module:xyzcorp/helper} and
 * {@link module:xyzcorp/helper.ShinyWidget#polish}.
 * @class
 * @requires module:xyzcorp/helper
 * @requires xyzcorp/helper.ShinyWidget#polish
 */
function Widgetizer() {}
```

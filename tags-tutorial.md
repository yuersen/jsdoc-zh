# @tutorial

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@tutorial <tutorialID>
```

## 概述

`@tutorial` 标签插入一个指向向导教程的链接，作为文档的一部分。有关创建教程指导请参阅 [tutorials overview](./about-tutorials.md)。

可以在一个 JSDoc 注释中多次使用 `@tutorial` 标记。

## 实例

在下面的示例中，`MyClass` 的文档将链接到具有标识符 `tutorial-1` 和 `tutorial-2` 的教程。

```
/**
 * Description
 * @class
 * @tutorial tutorial-1
 * @tutorial tutorial-2
 */
function MyClass() {}
```

## 相关链接

- [Tutorials](./about-tutorials.md)
- [{@tutorial}](./tags-inline-tutorial.md)
- [@see](./tags-see.md)
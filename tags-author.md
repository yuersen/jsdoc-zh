# @author

## 目录

- [语法](#语法)
- [概述](#概述)
- [实例](#实例)
- [相关链接](#相关链接)

## 语法

```
@author <name> [<emailAddress>]
```

## 概述

`@author` 标签标识一个项目的作者。在 JSDoc3.2 和更高版本中，如果作者的名字后面跟着尖括号括起来的电子邮件地址， 默认模板将电子邮件地址转换为 `mailto:` 链接。

## 实例

例如，描述项目的作者:

```javascript
/**
 * @author Jane Smith <jsmith@example.com>
 */
function MyClass() {}
```

## 相关链接

- [@file](./tags-file.md)
- [@version](./tags-version.md)



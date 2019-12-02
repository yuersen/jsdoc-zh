# 包含 README 文件

## 目录

- [示例](#示例)

有两种方法可以将 `README` 文件中的信息合并到您的文档：

1. 在 JavaScript 文件的源路径中，包含一个名为 `README.md` 的 `Markdown` 文件的路径。JSDoc 将使用在源路径中发现的第一个 `README.md` 文件。
2. 使用 `-R/--readme` 包命令行选项运行 JSDoc，指定 `README` 文件的路径。此选项在 JSDoc3.3.0 及更高版本中可用。`README` 文件可以使用任何名称和扩展名，但它必须是 `Markdown` 格式。

`-R/--readme` 命令行选项优先于源路径。如果使用 `-R/--readme` 命令行选项，JSDoc 会忽略源路径中任何的 `README.md` 文件。

如果正在使用 JSDoc 的默认模板，`README` 文件的内容将渲染成HTML，生成在文档 `index.html` 文件中。

## 示例

在源路径中包含一个 `README` 文件:

```
jsdoc path/to/js path/to/readme/README.md
```

使用 `-R/--readme` 选项：

```
jsdoc --readme path/to/readme/README path/to/js
```

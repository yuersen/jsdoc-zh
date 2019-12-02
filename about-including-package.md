# 包含 Package（包）文件

## 目录

- [示例](#示例)

包文件包含的信息对你的项目文档是很有用的，比如该项目的名称和版本号。当 JSDoc 生成的文档的时候,可以自动使用项目中 `package.json` 文件中的信息。例如，默认的模板在文档中显示项目的名称和版本号。

有两种方法可以将 `package.json` 文件中的信息合并到您的文档：

1. 在 JavaScript文件的源路径中，包含 `package.json` 文件的路径。JSDoc 将使用在源路径中发现的第一个 `package.json` 文件。
2. 使用 `-P/--package` 包命令行选项运行 JSDoc，指定 `package.json` 文件的路径。此选项在 JSDoc3.3.0 及更高版本中可用。

`-P/--package` 命令行选项优先于源路径。如果使用 `-P/--package` 命令行选项，JSDoc 会忽略源路径中任何的 `package.json` 文件。

`package.json` 文件必须使用 [npm 的包格式](https://docs.npmjs.com/files/package.json)。

## 示例

在源路径中包含一个包文件:

```
jsdoc path/to/js path/to/package/package.json
```

使用 `-P/--package` 选项：

```
jsdoc --package path/to/package/package-docs.json path/to/js
```

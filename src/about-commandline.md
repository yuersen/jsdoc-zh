<!--
title: JSDoc中的命令行参数
order: 103
author: yuer
-->

# JSDoc中的命令行参数

## 目录

- [示例](#示例)
- [相关链接](#相关链接)

使用 JSDoc 最基本的，像这样使用：

```
/path/to/jsdoc yourSourceCodeFile.js anotherSourceCodeFile.js ...
```

其中`...`是生成文档文件的路径。

此外，可以提供一个 [Markdown file](https://daringfireball.net/projects/markdown/syntax)（以“.md”结尾）或者一个名为“README”文件的路径，它将被添加到文档的头部。请参见[these instructions](./about-including-readme.md)。

JSDoc 支持大量的命令行选项，其中许多选项有长和短两种形式。或者，JSDoc 命令行选项可以在配置文件中指定。命令行选项：

| 选项 | 描述 |
|---|---|
| `-a <value>`, `--access <value>` | 只显示特定 access 方法属性的标识符： `private`, `protected`, `public`, or `undefined`, 或者 `all`（表示所有的访问级别）。默认情况下，显示除 `private` 标识符以外的所有标识符。 |
| `-c <value>`, `--configure <value>` | JSDoc 配置文件的路径。默认为安装 JSDoc 目录下的 `conf.json` 或 `conf.json.EXAMPLE`。 |
| `-d <value>`, `--destination <value>` |	输出生成文档的文件夹路径。JSDoc 内置的 Haruki 模板，使用 console 将数据转储到控制台。默认为 `./out`。|
| `--debug` |	打印日志信息，可以帮助调试 JSDoc 本身的问题。|
| `-e <value>`, `--encoding <value>` | 当 JSDoc 阅读源代码时假定使用这个编码，默认为 `utf8`。|
| `-h`, `--help` | 显示 JSDoc 的命令行选项的信息，然后退出。|
| `--match <value>` | 只运行测试，其名称中包含 value。|
| `--nocolor` |	当运行测试时，在控制台输出信息不要使用的颜色。在 Windows 中，这个选项是默认启用的。|
| `-p`, `--private` |	将标记有[@private 标签](./tags-private.md)的标识符也生成到文档中。默认情况下，不包括私有标识符。|
| `-P`, `--package` |	包含项目名称，版本，和其他细节的 `package.json` 文件。默认为在源路径中找到的第一个 `package.json` 文件。|
| `--pedantic` | 将错误视为致命错误，将警告视为错误。默认为 `false`。|
| `-q <value>`, `--query <value>` |	一个查询字符串用来解析和存储到全局变量 `env.opts.query` 中。示例：foo=bar&baz=true。|
| `-r`, `--recurse` |	扫描源文件和导览时递归到子目录。|
| `-R`, `--readme` | 用来包含到生成文档的 `README.md` 文件。默认为在源路径中找到的第一 `README.md` 文件。|
| `-t <value>`, `--template <value>` | 用于生成输出文档的模板的路径。默认为 `templates/default`，JSDoc 内置的默认模板。|
| `-T`, `--test` | 运行 JSDoc 的测试套件，并把结果打印到控制台。|
| `-u <value>`, `--tutorials <value>` |	导览路径，JSDoc 要搜索的目录。如果省略，将不生成导览页。查看[导览说明](./about-tutorials.md)，以了解更多信息。|
| `-v`, `--version` |	显示 JSDoc 的版本号，然后退出。|
| `--verbose` |	日志的详细信息到控制台 JSDoc 运行。默认为 `false`。|
| `-X`, `--explain` | 以 JSON 格式转储所有的 doclet 到控制台，然后退出。|

## 示例

使用配置文件 `/path/to/my/conf.json`，为 `./src` 目录的中文件生成文档，并保存输出到 `./docs` 目录中：

```shell
/path/to/jsdoc src -r -c /path/to/my/conf.json -d docs
```

运行所有 JSDoc 的测试，其名称包含 tag，并记录每个测试信息：

```
/path/to/jsdoc -T --match tag --verbose
```

## 相关链接

- [使用配置文件配置 JSDoc](./about-configuring-jsdoc.md)

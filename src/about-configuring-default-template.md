<!--
title: 配置 JSDoc 的默认模板
order: 105
author: yuer
-->

# 配置 JSDoc 的默认模板

## 目录

- [生成适合打印的文档](#生成适合打印的文档)
- [复制静态文件到输出目录](#复制静态文件到输出目录)
- [在页脚显示当前日期](#在页脚显示当前日期)
- [在导航栏中显示长文件名](#在导航栏中显示长文件名)
- [重写默认模板的布局文件](#重写默认模板的布局文件)
- [相关链接](#相关链接)



JSDoc 的默认模板中提供了几个选项，您可以使用自定义外观和内容来生成文档。 要使用这些选项，您必须[为JSDoc创建一个配置文件](./about-configuring-jsdoc.md)，并在配置文件中设置相应的选项。

## 生成适合打印的文档

默认情况下，JSDoc 的默认模板为你的源文件生成适合打印的文档。在文档中，它还链接到那些适合的打印文件。

要禁用适合打印的文件，设置选项 `templates.default.outputSourceFiles` 为 `false`。使用该选项也将删除文档中链接到源文件的连接。此选项在 JSDoc3.3.0 及更高版本上是可用的。

## 复制静态文件到输出目录

JSDoc的默认模板会自动复制一些静态文件，如 CSS 样式表，到输出目录。在 JSDoc3.3.0 或更高版本，你可以告诉默认模板复制附加静态文件到输出目录。例如，您可能希望复制一个图像的目录到输出目录，所以你可以在你的文档中显示这些图像。

要将附加静态文件复制到输出目录，使用下列选项：

- `templates.default.staticFiles.include`：一个路径的数组，其内容应复制到输出目录。子目录也将被复制。
- `templates.default.staticFiles.exclude`：路径的数组，指明这些不应该被复制到输出目录。
- `templates.default.staticFiles.includePattern`：正则表达式，指明要复制的文件。如果这个属性没有被定义，所有的文件将被复制。
- `templates.default.staticFiles.excludePattern`：正则表达式，说明哪些文件跳过(不复制)。如果这个属性没有被定义，什么都不会被跳过。

复制图片目录到输出目录, 例如，要复制 `./myproject/static` 目录中的所有静态文件到输出目录中：

```
{
  "templates": {
    "default": {
      "staticFiles": {
        "include": [
          "./myproject/static"
        ]
      }
    }
  }
}
```

如果您的静态文件目录中包含 `./myproject/static/img/screen.png` 文件，您可以通过 HTML 标签 `<img src="img/screen.png">` 在您的文档中显示该图片。

## 在页脚显示当前日期

默认情况下，JSDoc 的默认模板总是在生成文档的页脚显示当前日期。在JSDoc3.3.0或更高版本，可以通过设置选项 `templates.default.includeDate` 为 `false` 来忽略当前日期。

## 在导航栏中显示长文件名

默认情况下，JSDoc 的默认模板在导航列中显示每个标识符缩写的名字。例如，标识符 `my.namespace.MyClass` 将简单地称为显示 `MyClass`。相反,要显示完整的长名称，设置选项 `templates.default.useLongnameInNav` 为 `true`。此选项在 JSDoc3.4.0 及更高版本中可用。

## 重写默认模板的布局文件

默认的模板使用名为 `layout.tmpl` 的文件指定每个生成文档的页面中的页眉和页脚。特别是，每个生产的文档页面会加载该文件定义了 CSS 和 JavaScript 文件。在 JSDoc3.3.0 或更高版本，可以指定使用自己的 `layout.tmpl` 文件，它允许你加载自己的自定义 CSS 和JavaScript 文件，去除或替代，标准的文件。

要使用此功能，设置选项 `templates.default.layoutFile` 的路径到你的自定义布局文件。路径是相对于 `config.json` 文件，当前的工作目录，和 JSDoc 目录的相对路径，按照这个顺序。

## 相关链接

- [使用配置文件配置 JSDoc](./about-configuring-jsdoc.md)
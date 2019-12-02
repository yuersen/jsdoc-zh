# ES 2015 Modules

## 目录

- [模块标识符](#模块标识符)
- [导出值](#导出值)
- [相关链接](#相关链接)

JSDoc3 能够记录遵循 [ECMAScript 2015规范的模块](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)。ES2015 模块在JSDoc3.4.0及更高版本中支持。

## 模块标识符

当描述一个 ES2015 module（模块）时，将使用 [@module](./tag-moudle.md) 标签来描述模块的标识符。例如，如果用户通过调用 `import * as myShirt from 'my/shirt'` 加载模块，你会写一个包含 `@module my/shirt` 标签的 JSDoc 注释。

如果使用 `@module` 标签不带值，JSDoc 会基于文件路径尝试猜测正确的模块标识符。

当您使用一个 [JSDoc namepath](./about-namepaths.md)（名称路径）从另一个 JSDoc 注释中引用一个模块，您必须添加前缀 `module:`。例如，如果你想模块 `my/pants` 的文档连接到模块 `my/shirt`，您可以使用 [@see](./tag-see.md) 标签来描述 `my/pants`，如下：

```
/**
  * Pants module.
  * @module my/pants
  * @see module:my/shirt
  */
```

同样，模块中每个成员的 `namepath` （名称路径）将以 `module:` 开始，后面跟模块名字。例如，如果你的 `my/pants` 模块输出一个 `Jeans` 类，并且 `Jeans` 有一个名为 `hem` 的实例方法，那么这个实例方法 `longname`（长名称）是 `module:my/pants.Jeans#hem`。

## 导出值

下面的示例演示如何在 ES2015 模块中描述不同种类的导出值。在多数情况下，你可以简单地在 `export` 语句上添加一个 JSDoc 注释来定义导出值。如果要以其他名称导出一个值，您可以在其 `export` 块中描述导出值。

例如，文档化一个模块的导出值：

```
/** @module color/mixer */

/** The name of the module. */
export const name = 'mixer';

/** The most recent blended color. */
export var lastColor = null;

/**
  * Blend two colors together.
  * @param {string} color1 - The first color, in hexadecimal format.
  * @param {string} color2 - The second color, in hexadecimal format.
  * @return {string} The blended color.
  */
export function blend(color1, color2) {}

// convert color to array of RGB values (0-255)
function rgbify(color) {}

export {
  /**
    * Get the red, green, and blue values of a color.
    * @function
    * @param {string} color - A color, in hexadecimal format.
    * @returns {Array.<number>} An array of the red, green, and blue values,
    * each ranging from 0 to 255.
    */
  rgbify as toRgb
}
```

## 相关链接

- [在 JSDoc 3中使用名称路径](./about-namepaths.md)
- [@module](./tag-module.md)



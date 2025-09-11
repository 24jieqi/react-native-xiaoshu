/* eslint-disable no-undef */
// 更多配置 https://prettier.io/docs/en/options.html

/** @type {import('prettier').Options} */
module.exports = {
  // /**
  //  * 单行输出（不折行）的（最大）长度
  //  * @default 80,
  //  */
  // printWidth: 80,

  // /**
  //  * 设置工具每一个水平缩进的空格数
  //  * @default 2
  //  */
  // tabWidth: 2,

  /**
   * 使用tab（制表位）缩进而非空格
   * @default false
   */
  useTabs: false,

  /**
   * 在语句末尾添加分号
   * @default true
   */
  semi: false,

  /**
   * 使用单引号而非双引号
   * @default false
   */
  singleQuote: true,

  // /**
  //  * 对象使用属性时是否使用引号
  //  * @default 'as-needed'
  //  */
  // quoteProps: 'as-needed',

  // /**
  //  * JSX 中使用单引号替代双引号
  //  * @default false
  //  */
  // jsxSingleQuote: false,

  /**
   * 在任何可能的多行中输入尾逗号
   * @default 'es5'
   */
  trailingComma: 'all',

  // /**
  //  * 在对象字面量声明所使用的的花括号后（{）和前（}）输出空格
  //  * @default true
  //  */
  // bracketSpacing: true,

  /**
   * 在多行 HTML 中前置标签的 > 符号在末尾还是独立占一行
   * @default false
   */
  bracketSameLine: true,

  /**
   * 箭头函数的参数用括号包裹
   * @default 'always'
   */
  arrowParens: 'avoid',
}

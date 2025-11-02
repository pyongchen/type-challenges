/*
  4484 - IsTuple
  -------
  by jiangshan (@jiangshanmeta) #中等 #tuple

  ### 题目

  Implement a type ```IsTuple```, which takes an input type ```T``` and returns whether ```T``` is tuple type.

  For example:

  ```typescript
  type case1 = IsTuple<[number]> // true
  type case2 = IsTuple<readonly [number]> // true
  type case3 = IsTuple<number[]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/4484/zh-CN
*/

/* _____________ 你的代码 _____________ */

type IsTuple<T> = [T] extends [never] ? false :
  T extends readonly any[] ? number extends T["length"] ? false : true : false

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsTuple<[]>, true>>,
  Expect<Equal<IsTuple<[number]>, true>>,
  Expect<Equal<IsTuple<readonly [1]>, true>>,
  Expect<Equal<IsTuple<{ length: 1 }>, false>>,
  Expect<Equal<IsTuple<number[]>, false>>,
  Expect<Equal<IsTuple<never>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4484/answer/zh-CN
  > 查看解答：https://tsch.js.org/4484/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

/*
 * 数组:
 * 1. 同类型元素的集合
 * 2. 长度不确定的数据
 * 
 * 元组:
 * 1. 函数返回多个不同类型的值：function getData(): [number, string, boolean]
 * 2. 表示固定结构的数据：type Point = [number, number]
 */

type Arr1 = number[];
type Arr2 = [number, string];
type DD1 = Arr1['length'] // number
type DD2 = Arr2['length'] // 2

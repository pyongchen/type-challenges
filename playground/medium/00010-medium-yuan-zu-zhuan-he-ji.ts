/*
  10 - 元组转合集
  -------
  by Anthony Fu (@antfu) #中等 #infer #tuple #union

  ### 题目

  实现泛型`TupleToUnion<T>`，它返回元组所有值的合集。

  例如

  ```ts
  type Arr = ['1', '2', '3']

  type Test = TupleToUnion<Arr> // expected to be '1' | '2' | '3'
  ```

  > 在 Github 上查看：https://tsch.js.org/10/zh-CN
*/

/* _____________ 你的代码 _____________ */

type TupleToUnion<T extends any[]> = T[number]

/*
  解析：
  Array<infer ITEMS>
  问的是：数组的【元素类型】是什么？
  答案：123 | '456' | true

  [...infer ITEMS]
  问的是：这个【展开的元组】是什么？
  答案：[123, '456', true]
*/
type TupleToUnion2<T extends any[]> = T extends Array<infer items> ? items : never;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion2<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion2<[123]>, 123>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/10/answer/zh-CN
  > 查看解答：https://tsch.js.org/10/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

type TupleToArray<T extends any[]> = T extends [...infer items] ? items : never;
type TupleToArrayRes1 = TupleToArray<[123, '456', true]>;
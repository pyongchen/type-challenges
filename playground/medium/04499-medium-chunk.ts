/*
  4499 - Chunk
  -------
  by キリサメ qianxi (@qianxi0410) #中等 #tuple

  ### 题目

  Do you know `lodash`? `Chunk` is a very useful function in it, now let's implement it.
  `Chunk<T, N>` accepts two required type parameters, the `T` must be a `tuple`, and the `N` must be an `integer >=1`

  ```ts
  type exp1 = Chunk<[1, 2, 3], 2> // expected to be [[1, 2], [3]]
  type exp2 = Chunk<[1, 2, 3], 4> // expected to be [[1, 2, 3]]
  type exp3 = Chunk<[1, 2, 3], 1> // expected to be [[1], [2], [3]]
  ```

  > 在 Github 上查看：https://tsch.js.org/4499/zh-CN
*/

/* _____________ 你的代码 _____________ */

type Chunk<
  T extends any[],
  N extends number,
  Current extends any[] = []
> =
  // 情况1: 当前块已经满了（达到 N 个元素）
 Current["length"] extends N
  ? [Current, ...Chunk<T, N, []>] // 保存当前块，重置继续
  : // 情况2: 当前块还没满
   T extends [infer F, ...infer Reset]
    ? Chunk<Reset, N, [...Current, F]> // 继续累积
    : // 情况3: 没有更多元素了
      Current extends [] ? [] : [Current]
 

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Chunk<[], 1>, []>>,
  Expect<Equal<Chunk<[1, 2, 3], 1>, [[1], [2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3], 2>, [[1, 2], [3]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 2>, [[1, 2], [3, 4]]>>,
  Expect<Equal<Chunk<[1, 2, 3, 4], 5>, [[1, 2, 3, 4]]>>,
  Expect<Equal<Chunk<[1, true, 2, false], 2>, [[1, true], [2, false]]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/4499/answer/zh-CN
  > 查看解答：https://tsch.js.org/4499/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/
type Res1 = Chunk<[1, 2, 3], 1>;
type Res2 = Chunk<[1, 2, 3, 4], 5>;
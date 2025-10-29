/*
  3243 - FlattenDepth
  -------
  by jiangshan (@jiangshanmeta) #中等 #array

  ### 题目

  Recursively flatten array up to depth times.

  For example:

  ```typescript
  type a = FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2> // [1, 2, 3, 4, [5]]. flattern 2 times
  type b = FlattenDepth<[1, 2, [3, 4], [[[5]]]]> // [1, 2, 3, 4, [[5]]]. Depth defaults to be 1
  ```

  If the depth is provided, it's guaranteed to be positive integer.

  > 在 Github 上查看：https://tsch.js.org/3243/zh-CN
*/

/* _____________ 你的代码 _____________ */


type FlattenOnce<T extends unknown[]> = T extends [infer F, ...infer Reset] ? 
  F extends any[] ? [...F, ...FlattenOnce<Reset>] : [F, ...FlattenOnce<Reset>] 
   : []

type FlattenDeep<T extends unknown[]> = T extends [infer F, ...infer Reset] ? 
   F extends any[] ? [...FlattenDeep<F>, ...FlattenDeep<Reset>] : [F, ...FlattenDeep<Reset>] 
    : []

// 每次递归时，判断层数和它的 length 是否一致，如果一致，说明打平层数够了，直接返回本身即可；否则继续递归。
type FlattenDepth<T extends any[], S = 1,  U extends any[] = []>
 = U['length'] extends S ? T : (
    T extends [infer F, ...infer Reset] ?
      F extends any[] ? [...FlattenDepth<F, S, ['', ...U]>, ...FlattenDepth<Reset, S, U>]
       : [F, ...FlattenDepth<Reset, S, U>] 
      : []
)

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<FlattenDepth<[]>, []>>,
  Expect<Equal<FlattenDepth<[1, 2, 3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<FlattenDepth<[1, [2]]>, [1, 2]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]], 2>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, 2, [3, 4], [[[5]]]]>, [1, 2, 3, 4, [[5]]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 3>, [1, 2, 3, 4, [5]]>>,
  Expect<Equal<FlattenDepth<[1, [2, [3, [4, [5]]]]], 19260817>, [1, 2, 3, 4, 5]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/3243/answer/zh-CN
  > 查看解答：https://tsch.js.org/3243/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

type Res1 = FlattenOnce<[1, 2, [3, 4], [[[5]]]]>
type Res2 = FlattenDeep<[1, [[[2]]], [3, 4], [[[5]]]]>
type Res3 = FlattenDepth<[1, 2, [3, 4], [[[5]]]]>
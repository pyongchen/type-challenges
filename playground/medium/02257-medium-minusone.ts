/*
  2257 - MinusOne
  -------
  by Mustafo Faiz (@fayzzzm) #中等 #math

  ### 题目

  给定一个正整数作为类型的参数，要求返回的类型是该数字减 1。

  例如:

  ```ts
  type Zero = MinusOne<1> // 0
  type FiftyFour = MinusOne<55> // 54
  ```

  > 在 Github 上查看：https://tsch.js.org/2257/zh-CN
*/

/* _____________ 你的代码 _____________ */

type MinusOneMy<T extends number, Arr extends string[] = []> =
  T extends Arr["length"] ?
    Arr extends [infer _, ...infer Right] ? Right['length'] : 0
  : MinusOneMy<T, ['', ...Arr]>

// 解析：https://claude.ai/chat/742b9a06-dfb6-4dc3-9848-dceac45ccd53
type Map = [9, 0, 1, 2, 3, 4, 5, 6, 7, 8]
type ReverseString<T extends string> = T extends `${infer First}${infer Rest}` ? `${ReverseString<Rest>}${First}` : T
type Decrease<T extends string> = T extends `${infer First extends number}${infer Rest}` ?
 `${Map[First]}${First extends 0 ? Decrease<Rest> : Rest}` : T
type ParseInt<T extends string> = T extends `${0}${infer Rest}` ?
 ParseInt<`${Rest}`> : (T extends `${infer N extends number}` ? N : 0)
type MinusOne<T extends number> = T extends 0 ? -1 : ParseInt<ReverseString<Decrease<ReverseString<`${T}`>>>>


/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
  Expect<Equal<MinusOne<9_007_199_254_740_992>, 9_007_199_254_740_991>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2257/answer/zh-CN
  > 查看解答：https://tsch.js.org/2257/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

// 9801
type DDD = Decrease<'1089'>
type DDD2 = ReverseString<DDD>
/*
  1097 - IsUnion
  -------
  by null (@bencor) #中等 #union

  ### 题目

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > 在 Github 上查看：https://tsch.js.org/1097/zh-CN
*/

/* _____________ 你的代码 _____________ */

/*
 * B = T 保存原始类型，辅助参数，保存了 T 的完整类型（不会被分布）
 * 1. [T] extends [never] ? false - 处理 never
 * 2. T extends B - 触发分布式条件类型
 *    - 左边的 T 会分布，例如 'a' | 'b' 会分别检查 'a' extends B 和 'b' extends B
 *    - 右边的 B 不会分布，保持完整的联合类型 'a' | 'b'
 * 3. [B] extends [T] - 比较完整类型与单个成员
 *    - 用元组包裹防止分布
 *    - 对于联合类型的每个成员：
 *      - ['a' | 'b'] extends ['a'] → false ✅ (说明是联合类型)
 *      - ['a' | 'b'] extends ['b'] → false ✅ (说明是联合类型)
 *    - 对于非联合类型：
 *      - ['a'] extends ['a'] → true (返回 false，不是联合类型)
 */
type IsUnion<T, B = T> =[T] extends [never] ? false : T extends B ? [B] extends [T] ? false : true : never

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/1097/answer/zh-CN
  > 查看解答：https://tsch.js.org/1097/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

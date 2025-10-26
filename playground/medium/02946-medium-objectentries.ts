/*
  2946 - ObjectEntries
  -------
  by jiangshan (@jiangshanmeta) #中等 #object

  ### 题目

  Implement the type version of ```Object.entries```

  For example

  ```typescript
  interface Model {
    name: string;
    age: number;
    locations: string[] | null;
  }
  type modelEntries = ObjectEntries<Model> // ['name', string] | ['age', number] | ['locations', string[] | null];
  ```

  > 在 Github 上查看：https://tsch.js.org/2946/zh-CN
*/

/* _____________ 你的代码 _____________ */

// 使用 -? 移除可选，是为了防止value中出现undefined，可查看ObjValue类型
type ObjectEntries<T> = {
  [K in keyof T]-?: [K, [T[K]] extends [undefined] ? undefined : Required<T>[K] ]
}[keyof T]

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
  Expect<Equal<ObjectEntries<{ key?: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: undefined }>, ['key', undefined]>>,
  Expect<Equal<ObjectEntries<{ key: string | undefined }>, ['key', string | undefined]>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/2946/answer/zh-CN
  > 查看解答：https://tsch.js.org/2946/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

type PartialRes1 = Partial<Model>;
type Res1 = ObjectEntries<Partial<Model>>;
type Res2 = ObjectEntries<{ key?: undefined }>;



type Obj = {
  name: string,
  age?: number
};
type ObjValue = Obj[keyof Obj]

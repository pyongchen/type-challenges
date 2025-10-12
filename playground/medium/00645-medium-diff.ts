/*
  645 - Diff
  -------
  by ZYSzys (@ZYSzys) #中等 #object

  ### 题目

  获取两个接口类型中的差值属性。

  ```ts
  type Foo = {
    a: string;
    b: number;
  }
  type Bar = {
    a: string;
    c: boolean
  }

  type Result1 = Diff<Foo,Bar> // { b: number, c: boolean }
  type Result2 = Diff<Bar,Foo> // { b: number, c: boolean }

  ```

  > 在 Github 上查看：https://tsch.js.org/645/zh-CN
*/

/* _____________ 你的代码 _____________ */

type DiffMy<Obj1, Obj2> = {
  [K in keyof (Obj1 | keyof Obj2) as
     K extends keyof Obj1 ? K extends keyof Obj2 ? never : K
      : K extends keyof Obj2 ? K : never]: K extends keyof Obj1 ? Obj1[K] : K extends keyof Obj2 ? Obj2[K] : never
}

/*
 * 解析:
 * type T1=Foo&Bar;
 * keyof T1会拿到 Foo和Bar的所有key,因为Foo&Bar 相当于把两个对象merge了。
 * keyof T2会拿到既存在于Foo，也存在于Bar中的key,因为T2有可能是Foo，也有可能是Bar，所以只有拿共同拥有的key才是安全的。
 */
type Diff<Obj1, Obj2> = Omit<Obj1 & Obj2, keyof (Obj1 | Obj2)>

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string, gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string, gender: number }>>,
]

/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/645/answer/zh-CN
  > 查看解答：https://tsch.js.org/645/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

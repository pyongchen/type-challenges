// 题解： https://github.com/type-challenges/type-challenges/issues/13427

type MyPick<T, K extends keyof T> = {
  [key in K]: T[key]
}

export type Prettify<T> = {
  [K in keyof T]: T[K] extends Record<string, any> ? Prettify<T[K]> : T[K]
} & {}
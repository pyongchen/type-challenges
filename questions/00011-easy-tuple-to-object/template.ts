type TupleToObject<T extends readonly (string | number)[]> = {
  [p in T[number]]: p;
}

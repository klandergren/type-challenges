/* replace `any` with `(string | number)` to restrict tuples containing objects */
type TupleToObject<T extends readonly (string | number)[]> = {
  /* use `T[number]` to access every indexed property */
  [P in T[number]]: P;
};

/* replace `any` with `(string | number)` to restrict tuples containing objects */
type TupleToObject<T extends readonly (string | number)[]> = {
  /* use `T[number]` to access the value every indexed property */
  [V in T[number]]: V;
};

/* step 1: add a type constraint to T and U to ensure they are tuple
types. note: use `unknown[]` rather than `any[]` to ensure that any use is type
checked */

/* step 2: use the spread operator on each generic type variable to combine
their elements in a type safe way—called "variadic tuple types". */
type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];

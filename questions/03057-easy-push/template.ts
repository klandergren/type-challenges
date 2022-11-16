/* first: add type contraints to the generic type variables. prefer using
`unknown` to ensure downstream type checking */

/* second: use the spread operator to combine the elements of T with U  */
type Push<T extends unknown[], U extends unknown> = [...T, U];

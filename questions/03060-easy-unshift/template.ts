/* note: this is the same approach as used in 3057 */

/* first: add type contraints to the generic type variables. prefer using
`unknown` to ensure downstream type checking */

/* second: use the spread operator to combine the elements of T with U  */
type Unshift<T extends unknown[], U extends unknown> = [U, ...T];

/* note: I think there is some kind of distribution going on here to form the
union. I do not actually know how TypeScript works behind the scenes to make
`T[number]` access each value and add it to the union.  */
type TupleToUnion<T extends unknown[]> = T[number];

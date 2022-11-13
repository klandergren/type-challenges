/* remember: `extends` is saying: "can we assign the type on the left to the
type on the right?". here we want to handle the edge case of an empty array
returning never: */
type First<T extends any[]> = T extends [] ? never : T[0];

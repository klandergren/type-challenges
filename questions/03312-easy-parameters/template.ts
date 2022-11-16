/* first: prefer conditional type to type constraint, so move `extends` to
right hand side */

/* second: use `infer` to grab the type of `args` */
type MyParameters<T> = T extends (...args: infer R) => unknown ? R : never;

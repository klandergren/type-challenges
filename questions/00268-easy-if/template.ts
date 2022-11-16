/* first: add a type constraint via extends to `C` such that it may only be the
literal types `true` or `false` */

/* second: add a conditional type checking if C can be assigned to `true` and
if so, returning `T`, otherwise `F` */
type If<C extends true | false, T, F> = C extends true ? T : F;
